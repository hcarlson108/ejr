'use client';

type Tabs = 'hello!' | 'resume' | 'content' | 'contact'; //defines the tabs

type Props = {
  //sets the props for the Nav component
  active: Tabs; //active is a variable of Type Tabs
  onChange: (tab: Tabs) => void; //onClick function
};

export default function Nav({ active, onChange }: Props) {
  const tabs: Tabs[] = ['hello!', 'resume', 'content', 'contact']; //create an array for tabs

  return (
    <div className='flex-wrap justify-center mt-6 h-36 w-4xl text-2xl'>
      <h1 className='text-5xl bold flex justify-center text-pink-400 font-[GreatVibes-Regular] md:text-6xl lg:text-8xl'>
        Emma Joyce Radtke
      </h1>
      <div className='text-xl flex justify-center mt-6 gap-6 lg:text-2xl lg:gap-8'>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={
              active === t
                ? 'text-pink-400 hover: cursor-pointer'
                : 'hover: cursor-pointer'
            }
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
