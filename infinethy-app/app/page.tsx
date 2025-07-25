import Image from "next/image"
import Link from 'next/link'
import NookCard from './components/NookCard'
import aurora from '../public/Aurora.jpg'
import nook from '../public/Tom_Nook.png'
import Header from './components/Header'
import Gardening from './components/Gardening'

export default function Home() {
  const name = 'Nethy';
  return (
    <main className="dark">
      <Header />
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
        <Link href="/habitracker">
          <Image
            alt="Inkscape"
            src="InkscapeToSVGhover.svg"
            width="50"
            height="500"
          />
        </Link>
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
        <div className="flex">
          {/* <button className="w-32 flex-1 bg-indigo-500 hover:bg-indigo-700"><a href="/badexample">Bad Example</a></button> */}
          <Link href="/habitracker"><button className="w-32 flex-1 bg-sky-500 hover:bg-sky-700"><NookCard>Habitracker</NookCard></button></Link>
          <Link href="/params/272"><button className="w-32 flex-1 bg-fuchsia-500 hover:bg-fuchsia-700"><NookCard>Params</NookCard></button></Link>
          <Link href="/habitracker"><button className="w-32 flex-1 bg-emerald-500 hover:bg-emerald-700"><NookCard>HowlingHabitracker</NookCard></button></Link>
          <Link href="/params/dynamic"><button className="w-32 flex-1 bg-red-400 hover:bg-red-700"><NookCard>React Playground</NookCard></button></Link>
        </div>
        <div className="grid grid-flow-col grid-rows-4 gap-y-10 border-2">
          <Link href="/params/1" className="row-start-2 row-end-5 bg-lime-500 hover:bg-lime-800">
            <NookCard>
              <Gardening />
            </NookCard>
          </Link>
          <Link href="/params/2" className="row-span-3  row-start-1 bg-lime-100">
            <NookCard>
              <Image
                 alt="Tom Nook"
                 src={nook}
                 className="self-center"
              />
            </NookCard>
          </Link>
          <Link href="/params/3" className="row-span-3 row-start-1 bg-lime-900">
            <NookCard>
              <Image
                 alt="Tom Nook"
                 src={nook}
                 className="self-center"
                 style={{border: "1px solid #fff"}}
              />
            </NookCard></Link>
          <Link href="/params/4" className="row-span-3 row-start-2 bg-lime-700">
            <NookCard>
              <Image
                 alt="Tom Nook"
                 src={nook}
                 className="self-center"
                 style={{border: "1px solid #fff"}}
              />
            </NookCard>
          </Link>
        </div>
      </div>
    </main>
  );
}
