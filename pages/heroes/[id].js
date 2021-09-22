import Card from '../../src/components/card'
import Header from '../../src/components/header'
import Footer from '../../src/components/footer'

const Hero = ({ token }) => {
  // console.log(token)
  return (
    <div>
      <Header />
      {token.map((q, index) => (
          <div className="container mx-auto flex justify-center" key={index}>
            <div className="md:w-1/2 p-4">
              <Card {...q=q} />
            </div>
          </div>
      ))}
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const result = await fetch(`${process.env.SERVER_URL}/api/tokens`)
  const heroes = await result.json()

  const paths = heroes.map((hero) => {
    return {
      params: { id: hero.ID }
      } 
    }
  )
  return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
  // const { id } = context.query
  const res = await fetch(`${process.env.SERVER_URL}api/heroes/${params.id}`)
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
//     const res = await fetch(`${process.env.SERVER_URL}api/heroes/${id}`)
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

export default Hero