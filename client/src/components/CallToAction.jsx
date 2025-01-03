import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      
      {/* WanderLust Section */}
      <div className="flex-1 justify-center flex flex-col mb-6 sm:mb-0 sm:mr-6">
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
        <div className="p-7 flex-1 mt-4 flex justify-center items-center">
          <img src="../images/airbnb.jpg" alt="wanderlust" className="max-w-full h-auto" />
        </div>
      </div>

      {/* VibeMeet Section */}
      <div className="flex-1 justify-center flex flex-col mt-5">
        <h2 className='text-2xl'>
          VibeMeet is a full-stack web application replicating Zoom's core functionalities, including real-time video conferencing, chat, and collaboration features.
        </h2>
        <p className='text-gray-500 my-2'>
          Explore VibeMeet's real-time communication and collaboration features.
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://vibmeet-1.onrender.com" target='_blank' rel='noopener noreferrer'>
            VibeMeet
          </a>
        </Button>
        <div className="p-7 flex-1 mt-4 flex justify-center items-center">
          <img src="../images/vibmeet1.jpg" alt="vibemeet" className="w-48 h-auto" />
        </div>
      </div>

    </div>
  );
}
