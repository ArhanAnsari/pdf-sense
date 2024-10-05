"use client"

import { useState } from "react"

import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import DropZone from "react-dropzone"

import { Button } from "./ui/button";
import { Cloud } from "lucide-react";
import { File } from "lucide-react";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/hooks/use-toast";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";

const UploadDropZone = () => {
  const router=useRouter();
  const [isUploading,setIsUplaoding]=useState(false);
  const [uploadProgress,setUploadProgress]=useState(0);
  const {toast}=useToast();
const {startUpload}=useUploadThing("pdfUploader");
const { mutate: startPolling } = trpc.getFiles.useMutation(
  {
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`)
    },
    
  }
)
  const startSimulatingProgress=()=>{
      setUploadProgress(0);
    const interval=setInterval(()=>{
      setUploadProgress(((previousProgress)=>{
        if(previousProgress>=95)
        {
          clearInterval(interval)
          return previousProgress
        }
          return previousProgress+5
      }))
    },500)
    return interval
  }
  return <DropZone multiple={false} onDrop={(async(acceptedFile)=>{
    setIsUplaoding(true)
    const progresInterval=startSimulatingProgress();
        console.log(acceptedFile)
    // await new Promise((resolve)=>setTimeout(resolve,15000))
    const res=await startUpload(acceptedFile).catch((e)=>{
      console.error(e)
    })
    console.log(res)
    if(!res)
    {
     return toast({
      title:'Something went wrong',
      description:"please upload valid file",
      variant:"destructive"
     })
    }
    const [fileResponse]=res;
    const key=fileResponse?.key;
    if(!key)
    {
      return toast({
        title:'key is wrong',
        description:"please upload valid file",
        variant:"destructive"
       })
    }
    clearInterval(progresInterval)
    setUploadProgress(100)
    startPolling({ key })

  })}>
    {({ getRootProps, getInputProps, acceptedFiles }) => (
      <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-300">
            <div className="flex justify-center items-center h-full w-full">
               <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="w-full h-full flex flex-col items-center justify-center pb-6 pt-5" >
                      
                      <Cloud className="h-6 w-6 text-zinc-600 mb-2"/>
                      <p className="mb-2 text-sm text-zinc-700">
                        <span className="text-semibold">Click to upload</span>or Drag and Drop
                      </p>
                      <p className="text-xs text-zinc-500">PDF (upto 4MB)</p>
                    </div>
                    {acceptedFiles && acceptedFiles[0]?(
                      <div className='max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200'>
                              <div className='px-3 py-2 h-full grid place-items-center'>
                    <File className='h-4 w-4 text-pink-500' />
                             </div>
                             <div className='px-3 py-2 h-full text-sm truncate'>
                    {acceptedFiles[0].name}
                  </div>
                      </div>
                    ):null}
                    {isUploading?(
                      <div className="w-full mt-4 max-w-xs mx-auto">
                        <Progress value={uploadProgress} className="h-1 w-full bg-zinc-200"/>
                         </div>
                    ):null}
                      <input
                {...getInputProps()}
                type='file'
                id='dropzone-file'
                className='hidden'
              />
               </label>
            </div>
      </div>
    )}
  </DropZone>
}
const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <Dialog open={isOpen} onOpenChange={(v) => {
      if (!v) {
        setIsOpen(v)
      }
    }}>
      <DialogTrigger asChild onClick={()=>{setIsOpen(true)}}>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
      <UploadDropZone/>
  

      </DialogContent>
    </Dialog>

  )
}
export default UploadButton