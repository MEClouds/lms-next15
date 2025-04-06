"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"

interface DescriptionFormProps {
  initialData: {
    description?: string
  }
  courseId: string
}

export const DescriptionForm = ({
  initialData,
  courseId,
}: DescriptionFormProps) => {
  const t = useTranslations()
  const formSchema = z.object({
    description: z.string().min(1, { message: t("titleIsRequired") }),
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
      console.error(error)
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
        Course Description
        <Button variant={"ghost"} onClick={toggleEditing}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 me-2" />
              Edit description
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={cn("text-sm mt-2", !initialData.description && "italic")}
        >
          {initialData.description || "No description"}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-y-8">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="bg-primary-foreground"
                      disabled={isSubmitting}
                      placeholder="e.g. This course about ..."
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
