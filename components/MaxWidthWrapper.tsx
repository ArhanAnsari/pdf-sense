import { cn } from "@/lib/utils"
import { ReactNode } from "react"
const MaxWidthWrapper=({className,children}:{className?:string,children:ReactNode})=>{
  //the main div component merges the property of maxwidthwrapper that wraps the entire screen with the classname parameter which you can customize for different classes so that it does not get over written
  return (
    <div className={cn('mx-auto w-full max-w-screen-lg px-2.5 md:px-20',className)}>
        {children}
    </div>
  )
}
export default MaxWidthWrapper