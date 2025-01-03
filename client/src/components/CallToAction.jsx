import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            WanderLust allows users to search, book, and manage short-term rental properties. It focuses on user-friendly interfaces and seamless booking experiences.
            </h2>
            <p className='text-gray-500 my-2'>
            Checkout these resources with WanderLust Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://wanderlust-jt5f.onrender.com/listings" target='_blank' rel='noopener noreferrer'>
                WanderLust
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="../images/airbnb.jpg"  alt="wanderlust" />
        </div>
    </div>
  )
}