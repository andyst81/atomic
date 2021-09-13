export default function handler(req, res) {
  // Get data from your database
  res.status(200).json({'Hello': 'This is the Heroes page'})
}