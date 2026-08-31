'use client';
import Image from 'next/image';

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
    </div>
  );
}
