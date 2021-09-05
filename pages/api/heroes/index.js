
import { heroes } from '../../../heroes'

export default function handler(req, res) {
  res.status(200).json(heroes)
}