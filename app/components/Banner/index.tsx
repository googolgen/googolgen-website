'use client';
import Image from 'next/image';
import Carrousels from './Carrousels';
import './banner.css';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Banner = () => {

    return (
        <section id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-6 lg:pt-20 sm:pb-24 px-6">

                <div className='grid gap-4 grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly gap-4'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>
                            Empowering Students With &nbsp;
                            <span className='block md:inline'></span>
                            <span className='inline-block bg-gradient-to-r from-[#3d5fcb] via-[#3dcb7f] to-[#3da0cb] text-transparent bg-clip-text'>
                                <Typewriter
                                    options={{
                                        strings: ['Coding', 'AI', 'Web Development', 'App Development', 'Tech Skills'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span> 
                        </h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>From Learning to Mastery—Empowering Students for the Digital Age</h3>
                            
                        {/* Enroll Now Button CTA Button  */}
                        <div className='flex items-center justify-center'>
                        <Link href="https://forms.gle/6U2hmov3zTFvT4BL9" target='_blank' className="text-center p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-Blueviolet hover:bg-midnightblue duration-150 ease-in-out rounded-full w-full lg:w-[400px]">
                            <h1 className='text-base text-white'>Register Now</h1>
                        </Link>
                        </div>
                        {/* <div className='flex justify-center gap-2 mx-auto lg:mx-0'>
                            <h3 className='gradient-animation bg-gradient-to-r from-red to-[#ff9318] py-1 px-2 rounded-md text-white text-sm font-semibold text-center lg:text-start'>🚀 Lab Opening in Janurary 2026</h3>
                        </div> */}

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Learning path</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[260px] md:h-[400px] col-span-6 flex justify-center mb-6'>
                        <Carrousels/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
