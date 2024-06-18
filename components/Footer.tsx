import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { FlipWords } from './ui/Flip-Words'

const Footer = () => {
    const words = ["level", "stage", "phase", "rank", "milestone", "tier", "class", "quality"];

    return (
        <footer className='w-full pb-10 mb-[50px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw] mb-10'>
                    Ready to take <span className='text-purple'>your</span> digital skill to the next<FlipWords words={words} duration={1500}/>?
                </h1>
                
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
