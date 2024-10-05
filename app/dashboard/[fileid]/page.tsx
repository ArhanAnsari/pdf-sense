import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import { db } from "@/db";
import PdfRenderer from "@/components/PdfRenderer";
import ChatWrapper from "@/components/ChatWrapper";
import dynamic from 'next/dynamic';
interface PageProps{
  params:{
    fileid:string
  }
}
const page=async ({params}:PageProps)=>{
  // const PdfRenderer = dynamic(() => import('../../../components/PdfRenderer'), { ssr: false });
try{
  const {fileid}=params;
  console.log(params);
  const {getUser}=getKindeServerSession();
  const user=await getUser();
  if(!user || !user.id)
   redirect(`/auth-callback?origin=dashboard/${fileid}`)
 
 //make db call
 
 const file= await db.file.findFirst({
   where:{
     id:fileid,
     userId:user.id
   }
 })

 console.log(file)
 if(!file) 
 {
  console.log("file not present")
  notFound();
 }
   console.log(file.url)


 return <div className="flex-1 flex flex-col justify-between h-[calc(100vh-3.5rem)]">
  <div className="mx-auto w-full max-w-8xl grow  lg:flex xl:px-2">
    {/* {left side} */}

    <div className='flex-1 xl:flex'>
          <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
            {/* Main area */}
            <PdfRenderer url={file.url}/>
          </div>
        </div>

        <div className='shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0'>
          <ChatWrapper  />
        </div>
  </div>
 </div>
}
 catch(e)
 {
   console.error(e);
 }
}
export default page