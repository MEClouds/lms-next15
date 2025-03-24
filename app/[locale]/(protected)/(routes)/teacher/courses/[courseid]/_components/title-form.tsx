"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Ghost, Pencil } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "@/i18n/routing"

interface TitleFormProps {
  initialData: {
    title: string
  }
  courseId: string
}

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
  const t = useTranslations()
  const formSchema = z.object({
    title: z.string().min(1, { message: t("titleIsRequired") }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  })

  const { isSubmitting, isValid } = form.formState
  const router = useRouter()
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    try {
      axios.patch(`/api/courses/${courseId}`, values)
      toast.success(t("courseUpdated"))
      toggleEditing()
      router.refresh()
    } catch (error) {
      toast.error(t("somethingWrong"))
    }
  }

  const [isEditing, setIsEditing] = useState(false)
  const toggleEditing = () => {
    setIsEditing(!isEditing)
  }
  return (
    <div className="mt-5 border bg-secondary rounded-md p-3">
      <div className=" font-medium flex items-center justify-between">
        Course title
        <Button variant={"ghost"} onClick={toggleEditing}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 me-2" />
              Edit title
            </>
          )}
        </Button>
      </div>
      {!isEditing && <div className="mt-2">{initialData.title}</div>}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-primary-foreground"
                      disabled={isSubmitting}
                      placeholder="Course title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button
                size={"sm"}
                disabled={!isValid || isSubmitting}
                type="submit"
                className="mt-1 flex items-center gap-x-2"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}
