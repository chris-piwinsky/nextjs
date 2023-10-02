import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <h1>Welcome to the Home Page</h1>
        <Image
          src="/cover.png" // Specify the path to your image in the "public" directory
          alt="Main Image"
          width={600} // Set the width of the image
          height={400} // Set the height of the image
        />
      </div>


    </main>
  )
}
