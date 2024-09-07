import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex flex-row h-[60px] md:h-[80px] items-center justify-between mx-5'>
        <h1 className="">SocialMedia</h1>
        <div className="flex space-x-2">
        <input type="password" className="md:w-[400px] w-[200px] p-3 h-[34px] border border-gray-300 rounded-xl" placeholder="your password"/>
        <div className="bg-gray-300 p-2 rounded-full hover:bg-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
</svg>

        </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
            <h3>Your name</h3>
            <div className="rounded-full overflow-hidden w-14 md:h-14 h-14">
            <Image src='/user_profile.JPG' alt="your profile" className="object-cover" width={80} height={80}/>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar