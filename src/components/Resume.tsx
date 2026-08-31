'use client';

export default function Resume() {
  return (
    <div className='flex justify-center w-4/5 h-screen min-h-0'>
      <div className='w-100 lg:w-3/5'>
        <iframe
          src={'/Resume.pdf'}
          width='100%'
          height='100%' // Adjust height as needed
          title='PDF Viewer'
        />
      </div>
    </div>
  );
}
