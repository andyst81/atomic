import Link from 'next/link'

export default function Person({ hero }) {
  return (
    <li>
      <Link href="/hero/[id]" as={`/hero/${hero.id}`}>
        <a>{hero.name}</a>
      </Link>
    </li>
  )
}