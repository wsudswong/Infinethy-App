import Image from "next/image"
import Link from 'next/link'
import NookCard from './components/NookCard'
import aurora from '../public/Aurora.jpg'

export default function Home() {
  return (
    <main>
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
        <h1 className="text-blue-600 text-3xl font-bold underline">Hello There</h1>
        <div className="flex w-32">
          <div><Link href="/habitracker">Habitracker</Link></div>
          <div><a href="/badexample">Bad Example</a></div>
          <div><NookCard /></div>
        </div>
      </div>
    </main>
  );
}
