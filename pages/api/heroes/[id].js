import { heroes } from '../../../heroes'

export default function heroHandler({ query: { id } }, res) {
  const filtered = heroes.filter((p) => p.ID === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}