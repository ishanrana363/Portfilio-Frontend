import { div } from 'framer-motion/client'
import React from 'react'

const WebDesign = () => {
    window.scrollTo(0, 0);
    return (
        <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 ' >
            <div className=' max-w-screen-xl mx-auto  ' >
                <div>
                    <h1 className='text-white font-mono md:text-2xl py-4 ' >Web design is the process of creating visually engaging, functional websites that deliver a seamless user experience. It combines aesthetics with usability, involving elements like layout, color schemes, typography, and navigation. Designers use tools such as HTML, CSS, and JavaScript to structure and style content, while frameworks like Bootstrap or Tailwind CSS streamline responsive design for various screen sizes. Effective web design considers user behavior, focusing on simplicity and intuitive interaction. From e-commerce platforms to personal blogs, good web design not only attracts users but also encourages engagement, making it a critical aspect of online presence and brand identity.</h1>
                </div>
            </div>
        </div>
    )
}

export default WebDesign
