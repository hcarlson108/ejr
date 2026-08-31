'use client';
import { useState } from 'react';
import Nav from '../components/Nav';
import Hello from '../components/Hello';
import Resume from '../components/Resume';
import Personal from '../components/Content';
import Contact from '../components/Contact';

type Tabs = 'hello!' | 'resume' | 'content' | 'contact';

export default function Home() {
  const [active, setActive] = useState<Tabs>('hello!');

  return (
    <div className='w-screen min-h-0'>
      <div className='flex justify-center'>
        <Nav active={active} onChange={setActive} />
      </div>
      <div className='flex justify-center -mt-0.5 min-h-0 grow lg:m-14'>
        {active === 'hello!' && <Hello />}
        {active === 'resume' && <Resume />}
        {active === 'content' && <Personal />}
        {active === 'contact' && <Contact />}
      </div>
    </div>
  );
}
