'use client';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='w-full flex flex-col items-center gap-4 mt-10 pt-6 pb-8 border-t border-neutral-200'>
      <div className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500'>
        <Link
          href='tel:3174435720'
          className='flex items-center gap-1 hover:text-pink-400'
        >
          <LocalPhoneIcon fontSize='small' />
          (317) 443-5720
        </Link>
        <Link
          href='mailto:emmaradtke7@gmail.com'
          className='flex items-center gap-1 hover:text-pink-400'
        >
          <EmailIcon fontSize='small' />
          emmaradtke7@gmail.com
        </Link>
      </div>

      <div className='flex gap-4'>
        <Link
          href='https://www.instagram.com/emma_radtke/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <InstagramIcon className='text-pink-400 hover:text-pink-500 transition-colors' />
        </Link>
        <Link
          href='https://www.tiktok.com/@emmajoyceradtke'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='TikTok'
        >
          <MusicNoteIcon className='text-pink-400 hover:text-pink-500 transition-colors' />
        </Link>
      </div>

      <div className='text-xs text-neutral-400 text-center'>
        <p>&copy; {year} Emma Joyce Radtke. All rights reserved.</p>
        <p>
          website by{' '}
          <Link href='https://github.com/hcarlson108'>hcarlson108</Link>
        </p>
      </div>
    </div>
  );
}
