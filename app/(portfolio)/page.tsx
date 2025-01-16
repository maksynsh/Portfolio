import { About, Hero, Highlights } from '@/components/home'
import { Navbar } from '@/components/layout'
import { navItems } from '@/data/nav'

export default function Home() {
  return (
    <div className="max-w-7xl w-full">
      <Navbar navItems={navItems} />
      <Hero />
      <About />
      <Highlights />
    </div>
  )
}
