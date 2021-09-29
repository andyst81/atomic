import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <p className='px-3'>
        <Link href='https://theatomicgallery'>The Atomic Gallery</Link>
        {" "} 
        is a tribute to 
        {" "}
        <Link href='https://theatomicheroes.com'>The Atomic Heroes</Link>. 
        All character copyrights are owned by Diatomic AB - The Atomic Heroes 2021.
      </p>
    </footer>
  )
}