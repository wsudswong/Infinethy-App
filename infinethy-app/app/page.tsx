import Image from "next/image"
import Link from 'next/link'
import NookCard from './components/NookCard'
import aurora from '../public/Aurora.jpg'
import nook from '../public/Tom_Nook.png'

export default function Home() {
  const name = 'Nethy';
  return (
    <main className="dark">
      <div>
        <Image
          alt="Aurora"
          src={aurora}
          fill
          style={{
            objectFit: 'cover',
            zIndex: -1
          }}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white dark:text-black">Hello, I&apos;m {name}</h1>
        <div className="flex">
          {/* <button className="w-32 flex-1 bg-indigo-500 hover:bg-indigo-700"><a href="/badexample">Bad Example</a></button> */}
          <Link href="/habitracker"><button className="w-32 flex-1 bg-sky-500 hover:bg-sky-700"><NookCard>Habitracker</NookCard></button></Link>
          <Link href="/params/272"><button className="w-32 flex-1 bg-fuchsia-500 hover:bg-fuchsia-700"><NookCard>Params</NookCard></button></Link>
          <Link href="/habitracker"><button className="w-32 flex-1 bg-emerald-500 hover:bg-emerald-700"><NookCard>HowlingHabitracker</NookCard></button></Link>
          <Link href="/params/dynamic"><button className="w-32 flex-1 bg-red-400 hover:bg-red-700"><NookCard>React Playground</NookCard></button></Link>
        </div>
        <div className="p-4">
          <div className="flow-root text-white dark:text-black">Welcome to my headpsace! Feel free to have a seat in any 
            <span className="inline-flex items-baseline">
              <span className="font-bold">nook</span>
              <Image
                 alt="Seedling"
                 src={nook}
                 className="mx-1 size-5 self-center rounded-full"
              />
            </span>
            you like and explore the unknowns if this small corner of the internet.</div>
        </div>
      </div>
    </main>
  );
}
