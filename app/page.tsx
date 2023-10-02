import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Hello World</h1>
      <Link href="./users">Users</Link>
      <ProductCard />
    </main>
  )
}
