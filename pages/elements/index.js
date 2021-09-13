import fetch from 'node-fetch'
// import UserList from '../components/UserList'

const HomePage = ({ tokenData }) => {
  return (
    <div className="home-page">
      <TokenList tokenData={tokenData} />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1
  let tokenData = null
  // Fetch data from external API
  try {
    const res = await fetch(`${process.env.FETCH_URL}/api/elements/Aluminium?page=${page}`)
    if (res.status !== 200) {
      throw new Error('Failed to fetch')
    }
    userData = await res.json()
  } catch (err) {
    userData = { error: { message: err.message } }
  }
  // Pass data to the page via props
  return { props: { tokenData } }
}
export default HomePage