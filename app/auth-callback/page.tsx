"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { trpc } from "../_trpc/client";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
const Page=()=>{
   const router=useRouter();
  const searchParams=useSearchParams();
  const origin=searchParams.get('origin');
  //  
  const { data, isSuccess, isError, error } = trpc.authCallback.useQuery(undefined, {
    retry: true,
    retryDelay: 500,
  });
  
  useEffect(() => {
    if (isSuccess && data?.success) {
      // Redirect user if the callback was successful
      router.push(origin ? `/${origin}` : '/dashboard');
    }
  }, [isSuccess, data, origin, router]);
  
  useEffect(() => {
    if (isError && error?.data?.code === 'UNAUTHORIZED') {
      // Handle unauthorized error by redirecting to sign-in page
      router.push('/sign-in');
    }
  }, [isError, error, router]);
  
  
  //this data will return the exact type of the data instead of 'any'
return (
  <>
  <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
        <h3 className='font-semibold text-xl'>
          Setting up your account...
        </h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div></>
)
}

export default Page