import Link from 'next/link'

export default function Header() {
  return(
    <div className='bg-cover text-center align-text-bottom pt-8 md:pt-24' style={{backgroundImage: 'url("/header.png")', height:'250px'}}>
      <span className='text-6xl inline-block uppercase' fontFamily="Oswald"><Link href='/' >The Atomic Gallery</Link></span>
    </div>
  )
}