'use client';
import Image from 'next/image';

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
            <div
              key={src + i}
              className='relative aspect-square overflow-hidden rounded-xl'
            >
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
