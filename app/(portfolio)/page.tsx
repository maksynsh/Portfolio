import { About, Hero, Highlights } from '@/components/home'

export default function Home() {
  return (
    <div className="max-w-7xl w-full">
      <Hero />
      <About />
      <Highlights />
    </div>
  )
}
