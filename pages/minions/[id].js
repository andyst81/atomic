import MinionCard from '../../src/components/minion'
import Header from '../../src/components/header'
import Key from '../../src/components/key'
import Footer from '../../src/components/footer'

const Minion = ({ token }) => {
  // console.log(token)
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Key />
      </div>
      {token.map((q, index) => (
          <div className="container mx-auto flex justify-center" key={index}>
            <div className="md:w-1/2 p-4">
              <MinionCard {...q=q} />
            </div>
          </div>
      ))}
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const result = await fetch(`${process.env.SERVER_URL}/api/minions`)
  const minions = await result.json()

  const paths = minions.map((minion) => {
    return {
      params: { id: minion.ID }
      } 
    }
  )
  return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
  // const { id } = context.query
  const res = await fetch(`${process.env.SERVER_URL}api/minions/${params.id}`)
  const json = await res.json()
  const token = [json]

  if (!res) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: { token }
  } 
}


// export async function getServerSideProps(context) {
//   const { id } = context.query
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}api/minions/${id}`)
//     const json = await res.json()
//     const token = [json]
//     return {
//         props: {
//             results: token,
//         },
//     } 
//   } catch(error) {
//     return { res: null, error: error }
//   }
// }

export default Minion