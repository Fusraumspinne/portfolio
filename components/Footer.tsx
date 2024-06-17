import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { SparklesCore } from "@/components/ui/sparkles";

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[50px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>your</span> digital presence to the next level?
                </h1>

                <div className="w-[40rem] h-40 relative">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={500}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                <a href="mailto:mjjaeger2002@gmail.com">
                    <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position='right' />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-small md:font-normal font-light'>Copyright © 2024 Marvin</p>

                <div className='flex items-start md:gap-3 gap-6 sm:mt-4'>
                    {socialMedia.map((profile => (
                        <div key={profile.id} className='w-10 h-10 curser-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={profile.img} width={20} height={20} />
                        </div>
                    )))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
