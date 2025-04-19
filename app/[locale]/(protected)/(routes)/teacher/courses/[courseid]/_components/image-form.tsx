"use client"

import * as z from "zod"

import { Button } from "@/components/ui/button"
import { ImageIcon, Pencil, PlusCircle } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "@/i18n/routing"
import { Course } from "@prisma/client"
import Image from "next/image"
import { FileUpload } from "@/components/file-upload"

interface ImageFormProps {
  initialData: Course
  courseId: string
}

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const t = useTranslations()
  const formSchema = z.object({
    imageUrl: z.string().min(1, { message: t("ImageRequired") }),
  })

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
        Course Image
        <Button variant={"ghost"} onClick={toggleEditing}>
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 ms-2" />
              Add an Image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w-4 me-2" />
              Edit Image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.imageUrl ? (
          <div className=" flex items-center justify-center h-60 bg-primary/20 rounded-md">
            <ImageIcon className="h-10 w-10 text-primary" />
          </div>
        ) : (
          <div className=" relative aspect-video mt-2">
            <Image
              alt="upload"
              fill
              className="object-cover rounded-md"
              src={initialData.imageUrl}
            />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url })
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-3">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  )
}
