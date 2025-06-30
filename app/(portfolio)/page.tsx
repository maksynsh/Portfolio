import {
  About,
  Approach,
  Clients,
  Contact,
  Hero,
  Highlights,
  Journey,
} from '@/components/home'

export default function Home() {
  return (
    <div className="max-w-7xl w-full">
      <Hero />
      <About />
      <Highlights />
      <Clients />
      <Journey />
      <Approach />
      <Contact />
    </div>
  )
}
