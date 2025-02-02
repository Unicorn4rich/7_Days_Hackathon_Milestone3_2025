import { SignIn } from '@clerk/nextjs'

export default function Clark_Route() {
  return(
     <div className='w-full h-full flex items-center justify-center py-[40px]'>
        <SignIn />
     </div>
  )
}