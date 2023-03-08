import Image from "next/image"

function LargeCard({ img, title, description, buttonText }) {
    return (
        <>
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} objectFit='cover' layout='fill' className='rounded-2xl brightness-50' />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className='text-4xl mb-3 w-64 text-white'>{title}</h3>
                <p className="text-2xl text-white">{description}</p>
                <button className="text-white text-lg font-bold bg-red-600 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </>
    )
}

export default LargeCard