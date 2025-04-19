## Session [05] Progress and Documentation

#### **New Features and Tasks Completed**

1. **File Upload Integration** :

- Implemented a `FileUpload` component in `file-upload.tsx` to handle file uploads.
- Utilized **UploadThing** for seamless file upload functionality.
- Added support for error handling with **react-hot-toast** to display user-friendly error messages.
- Configured the `UploadDropzone` to accept specific file types and handle upload completion events.

2. **Course Image Form** :

- Developed an `ImageForm` component in `image-form.tsx` for managing course images.
- Integrated the `FileUpload` component to allow users to upload or edit course images.
- Added a toggle between view and edit modes for better user experience.
- Displayed the uploaded image using the **Next.js Image** component with recommended aspect ratio guidelines.

3. **Course Page Enhancements** :

- Updated the course page in `page.tsx` to include the `ImageForm` component.
- Displayed the course image alongside the title and description, allowing users to edit all fields.

4. **File Upload Backend** :

- Configured the `ourFileRouter` in `core.ts` to define file upload routes.
- Added middleware to authenticate users using **Logto** before allowing uploads.
- Supported multiple file types and sizes for different upload endpoints, such as `courseImage`, `courseAttachment`, and `chapterVideo`.

#### **New Dependencies** :

- **UploadThing** : For handling file uploads with customizable routes and middleware.

#### Screenshots

![Screenshot](/public/documents/images/s05/1.png)
