"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import axios from "axios"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import { useRouter } from "@/i18n/routing"

const CreateCoursePage = () => {
  const t = useTranslations()
  const router = useRouter()
  // define schema
  const formSchema = z.object({
    title: z.string().min(1, {
      message: t("titleIsRequired"),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values)
      const response = await axios.post("/api/courses", values)
      router.push(`/teacher/courses/${response.data.id}`)
    } catch {
      toast.error(t("somethingWrong"))
    }
  }

  return (
    <div className=" h-full max-w-5xl mx-auto p-5 flex md:items-center md:justify-center ">
      <div>
        <h1 className="text-2xl">{t("CourseName")}</h1>
        <p>{t("CourseNameDesc")}</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" gap-y-8 mt-5"
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("CourseTitle")}</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormDescription>{t("formTitleDesc")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex mt-2 items-center gap-x-2">
              <Link href={"/"}>
                <Button type="button" variant={"ghost"}>
                  {t("Cancel")}
                </Button>
              </Link>

              <Button type="submit" disabled={!isValid || isSubmitting}>
                {t("Continue")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default CreateCoursePage
