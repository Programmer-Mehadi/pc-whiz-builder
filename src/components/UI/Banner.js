import { Carousel } from 'antd';
import Image from 'next/image';

const Banner = () => (
    <Carousel autoplays className='w-full  relative'>
        <div className='w-full relative'>
            <img src="/images/banner/1.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' />
            {/* <Image src="/images/banner/1.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' /> */}
            <div className='absolute top-0 left-0 w-full  h-[100%] flex items-center justify-center  bg-[#00000070]'>
                <h1 className='text-center text-white mx-auto text-[28px] md:text-[34px] lg:text-[48px] w-full max-w-[700px] px-5'>Unleash Your Ultimate PC: Build Your Dream Machine Today!</h1>
            </div>
        </div>
        <div className='w-full relative'>
            <img src="/images/banner/2.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' />
            {/* <Image src="/images/banner/2.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' /> */}
            <div className='absolute top-0 left-0 w-full  h-[100%] flex items-center justify-center  bg-[#00000090]'>
                <h1 className='text-center text-white mx-auto text-[28px] md:text-[34px] lg:text-[48px] w-full max-w-[700px] px-5'>Experience Performance at Its Peak: Design Your Perfect PC</h1>
            </div>
        </div>
        <div className='w-full relative'>
            <img src="/images/banner/3.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' />
            {/* <Image src="/images/banner/3.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' /> */}
            <div className='absolute top-0 left-0 w-full  h-[100%] flex items-center justify-center  bg-[#00000095]'>
                <h1 className='text-center text-white mx-auto text-[28px] md:text-[34px] lg:text-[48px] w-full max-w-[700px] px-5'>Create, Game, Dominate: Custom PC Builder for Champions</h1>
            </div>
        </div>
        <div className='w-full relative'>
            <img src="/images/banner/4.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' />
            {/* <Image src="/images/banner/4.jpg" alt="" height={360} width={100} className='w-full h-[350px] md:h-[400px] lg:h-[500px]' /> */}
            <div className='absolute top-0 left-0 w-full  h-[100%] flex items-center justify-center  bg-[#00000070]'>
                <h1 className='text-center text-white mx-auto text-[28px] md:text-[34px] lg:text-[48px] w-full max-w-[700px] px-5'>Innovate, Accelerate, Dominate: Your PC, Your Vision</h1>
            </div>
        </div>
    </Carousel>
);

export default Banner;