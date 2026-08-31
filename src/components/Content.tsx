'use client';

import YouTube from 'react-youtube';

export default function Content() {
  return (
    <div className='flex flex-col justify-center w-screen min-h-0'>
      <h1 className='flex justify-center items-center text-4xl mt-4 mb-6'>
        Reels
      </h1>
      <div className='flex flex-col space-y-1 justify-center items-center w-full'>
        <div className='aspect-video w-auto h-auto'>
          <YouTube
            videoId='y0sF5xhGreA'
            className='flex items-center justify-center'
          />
        </div>
      </div>
    </div>
  );
}
