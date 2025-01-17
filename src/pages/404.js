import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const ErrorPage = () => {
    return (
        <>
            <Head>
                <title>Error Page</title>
            </Head>
            <div className="flex flex-col items-center gap-4 min-h-[100vh]  justify-center" >
                <img src="/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" className='w-full max-w-[600px] mx-auto' alt="" />
                {/* <Image alt="404" width={500} height={500} src="/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" className='w-full max-w-[600px] mx-auto' /> */}
                <Link href="/" className="no-underline"> <button className='bg-cyan-900 hover:bg-cyan-700 hover:scale-105 transition-all text-white border-0 py-2 px-5 text-base rounded-[4px] cursor-pointer flex gap-3 items-center'>GO TO HOME PAGE</button></Link>
            </div>
        </>
    )
}

export default ErrorPage