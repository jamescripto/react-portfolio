import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

export default function Home() {
  return (
    <main className='bg-white  text-black  px-10'>
      <section className='bg h-screen min-h-screen'>
        <nav className='flex justify-between py-10 mb-12'>
          <h1 className='text-xl'>James Monti</h1>
          <ul className='flex items-center'>
            <li>
            <BsFillMoonStarsFill className='cursor-pointer' />
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-emerald-600 font-medium'>James Montilla</h2>
          <h3 className='text-2xl py-2'>Designer and Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>Freelancer providing services for design and development needs. Let's get cracking.</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillLinkedin/>
          <AiFillYoutube/>
        </div>
        <div className='h-40 w-full bg-red-400'>Image</div>
      </section>
      {/* netx section */}
      <section>
        <div>
          <h3 className='text-3xl py-1'>Services I offer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>Freelancer providing services for design and development needs. Let's get cracking.Freelancer providing services for design and development needs. Let's get cracking. <span className='text-teal-500'>Some highlighted text</span> and then more text here to fill</p>
          <p className='text-md py-5 leading-8 text-gray-800'>Freelancer providing services for design and development needs. Let's get cracking.Freelancer providing services for design and development needs. Let's get cracking. and then more text here to fill</p>
        </div>
        <div>
        <div className='h-40 w-full bg-red-400'>
          
         <span>Image need to put in public and then import as per the icons</span> 
        
        </div>
        </div>
      </section>
    </main>
  )
}
