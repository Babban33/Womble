import Image from "next/image"

export default function RightColumn(){
    return(
        <div className="hidden lg:flex w-1/2 relative">
            <Image 
                src="/signupbg.jpg" 
                alt="Background Image" 
                width={1920} 
                height={1920} 
                className="absolute inset-0 object-cover h-screen"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8">
                <h1 className="text-5xl font-bold mb-4">Welcome to Womble</h1>
                <p className="text-lg">Find meaningful connections and explore new possibilities.</p>
            </div>
        </div>
    )
}