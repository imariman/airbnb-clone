import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='relative z-10 h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
            <Image
                alt='banner'
                src='https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg'
                layout='fill'
                className='brightness-50'
                objectFit='cover' />
            <div className='absolute top-1/2 w-full text-center sm:mx-20 sm:text-left'>
                <p className='text-4xl sm:text-6xl text-white'>Welcome to Airbnb!</p>
                <button className='text-red-700 text-lg bg-white px-10 py-4 shadow-md rounded-full font-bold my-3
                hover:shadow-xl active:scale-90 transition duration-150'>Find comfortable stays!</button>
            </div>
        </div>
    )
}

export default Banner