'use client';
import Link from 'next/link';
import Image from 'next/image';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints';

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const first = form.get('firstName') || '';
    const last = form.get('lastName') || '';
    const subject = form.get('subject') || '';
    const message = form.get('message') || '';

    const body = `
    
  Hello  Emma,
   

  ${message}
    

  ${first} ${last}`.trim();

    const mailto = `mailto:emmaradtke7@gmail.com?subject=${encodeURIComponent(subject.toString())}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-0 w-full lg:w-2/3'>
      <div className='flex justify-between items-center h-full bg-pink-400 text-white rounded-2xl w-90 lg:w-2/3'>
        <div className='text-sm lg:text-lg'>
          <Link
            href='https://tinyurl.com/3bydtj3z'
            className='flex m-2 space-x-0.5'
          >
            {<LocationPinIcon className=' text-white text-4xl' />}
            <p>Chicago, IL</p>
          </Link>
          <div className='flex m-2 space-x-0.5'>
            {<LocalPhoneIcon className='text-white w-10 h-10' />}
            <p className='text-white'>(317)443-5720</p>
          </div>

          <div className='flex m-2 space-x-0.5'>
            {<EmailIcon className='text-white w-10 h-10' />}
            <p className='text-white'>emmaradtke7@gmail.com</p>
          </div>
          <div className='flex m-2 space-x-2'>
            <Link href='https://www.instagram.com/emma_radtke/'>
              <InstagramIcon />
            </Link>
            <Link href='https://www.tiktok.com/@emmajoyceradtke'>
              <MusicNoteIcon />
            </Link>
            <Link href=''>
              <TheaterComedyIcon />
            </Link>
          </div>
        </div>
        <div className='w-18 mr-8 lg:w-34 lg:mr-12'>
          <Image
            src='/headshot1.png'
            width={150}
            height={150}
            alt={'hello'}
            className='rounded-full '
          />
        </div>
      </div>
      <form onSubmit={onSubmit} className='w-90 lg:w-2/3'>
        <div className='flex flex-col justify-center items-center text-sm text-shadow-2xs w-full'>
          <div className='w-full'>
            <div className='flex mt-6 space-x-4 space-y-2'>
              <div className='flex flex-col flex-1'>
                <label htmlFor=''>First</label>
                <input
                  className='border-2 border-pink-500 w-full'
                  type='text'
                  name='firstName'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor=''>Last</label>
                <input
                  className='border-2 border-pink-500 w-full'
                  type='text'
                  name='lastName'
                />
              </div>
            </div>

            <div className='flex flex-col mt-2'>
              <label htmlFor=''>Subject</label>
              <input
                className='border-2 border-pink-500 w-full'
                type='text'
                name='subject'
              />
            </div>
          </div>
          <div className='flex flex-col mt-2 w-full'>
            <label htmlFor=''>Message</label>
            <input
              className='w-full h-40 border-2 rounded-xs border-pink-500'
              name='message'
            ></input>
          </div>

          <div className='flex flex-wrap space-x-4 m-6 h-8'>
            <button
              type='submit'
              className='rounded-2xl w-20 bg-pink-400 text-white hover:bg-pink-500 cursor-pointer'
            >
              submit
            </button>

            <button className='border border-black rounded-2xl w-26 hover:bg-neutral-200 cursor-pointer'>
              clear section
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
