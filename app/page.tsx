import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <>
  <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
    <div className="mx-auto mb-4 flex max-w-fit items-center justify-center spac-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop:blur transition-all hover:border-gray-300 hover:bg-white/50">
     <p className="text-sm font-semibold text-gray-700">
         PDF Sense is now public
     </p>
   </div>
   <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Chat with your{' '}
          <span className='text-red-400'>documents</span>{' '}
          in seconds.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          PDF Sense allows you to have conversations with any
          PDF document. Simply upload your file and start
          asking questions right away.
        </p>
         <Link className={buttonVariants({
          size:'lg',
          className:'mt-5'
         })}href="/dashboard" target="_blank">
         Get Started <ArrowRight className="ml-2 h-5 w-5"/>
         </Link>
  </MaxWidthWrapper>
  <div>

     <div>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
             <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                 <Image src='/dashboard-preview.jpg' alt="" width={1364} height={866}/>
             </div>
          </div>
      </div>
    </div>
  </div>
  <div className="mx-auto mb-32 mt-32 max-w-4xl sm:mt-56">
     <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
               <h2 className="mt-2 font-bold text-3xl text-gray-900 sm:text-5xl">
                Get your work done in minutes
               </h2>
               <p className="mt-4 text-lg text-gray-600">
                Get a hold of your entire pdf just by asking our AI
               </p>
          </div>
     </div>
     <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-red-400'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Either starting out with a free plan or
                choose our{' '}
                <Link
                  href='/pricing'
                  className='text-red-400 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-red-400'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll process your file and make it
                ready for you to chat with.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-red-400'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-700'>
                It&apos;s that simple. Try out Quill today -
                it really takes less than a minute.
              </span>
            </div>
          </li>
        </ol>
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
  </div>
  </>
  );
}
