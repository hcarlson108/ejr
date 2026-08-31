'use client';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className='w-full h-2/12 flex flex-col justify-center items-center mb-6'>
      <div className='flex flex-wrap'>
        <InstagramIcon className='text-pink-400' />
        <MusicNoteIcon className='text-pink-400' />
      </div>
      <div className='text-neutral-500'>website by Hayden Carlson</div>
    </div>
  );
}
