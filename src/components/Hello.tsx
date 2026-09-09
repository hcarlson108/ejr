'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// TODO: replace with real gallery photos placed in /public
const galleryImages = [
  '/headshot8.png',
  '/headshot9.png',
  '/headshot2.png',
  '/headshot3.png',
  '/headshot4.png',
  '/headshot5.png',
  '/headshot6.png',
  '/headshot7.png',
];

export default function Hello() {
  const [focusedImage, setFocusedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!focusedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFocusedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [focusedImage]);

  return (
    <div className='flex flex-wrap justify-center w-4/5 h-4/5 space-y-5 lg:w-4/5 lg:space-y-8'>
      <div className='justify-center items-center'>
        <Image
          src='/headshot1.png'
          width={400}
          height={400}
          alt={'hello'}
          className=''
        />
      </div>
      <div className='space-y-4'>
        <div className='flex justify-center'>
          <p>
            Hello Im emma and I love to act and sing! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat odit quas expedita esse nihil
            ad voluptatibus voluptas reiciendis alias? Voluptates error tempore,
            harum minus alias hic atque at qui! Accusantium.
          </p>
        </div>{' '}
        <div className='flex justify-center items-center'>
          <p>
            Hello Im emma and I love to act and sing! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat odit quas expedita esse nihil
            ad voluptatibus voluptas reiciendis alias? Voluptates error tempore,
            harum minus alias hic atque at qui! Accusantium.
          </p>
        </div>
      </div>
      <div className='w-full bg-pink-400 rounded-2xl p-6 lg:p-8'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
          {galleryImages.map((src, i) => (
            <button
              key={src + i}
              type='button'
              onClick={() => setFocusedImage(src)}
              aria-label={`View gallery photo ${i + 1} full size`}
              className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer ring-2 ring-transparent transition-all duration-300 hover:ring-white focus:outline-none focus-visible:ring-white'
            >
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
            </button>
          ))}
        </div>
      </div>

      {focusedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6'
          onClick={() => setFocusedImage(null)}
        >
          <div className='relative w-full max-w-2xl aspect-square'>
            <Image
              src={focusedImage}
              alt='Focused gallery photo'
              fill
              className='object-contain'
            />
          </div>
          <button
            type='button'
            onClick={() => setFocusedImage(null)}
            aria-label='Close'
            className='absolute top-6 right-6 text-white text-3xl leading-none cursor-pointer'
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
