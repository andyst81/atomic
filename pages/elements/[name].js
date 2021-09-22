import Header from '../../src/components/header'
import Footer from '../../src/components/footer'
import Card from '../../src/components/card'

const Element = ({ token }) => {

  return (
    <div>
      <Header />
      {token.map((element, index) => (            
          <div className="container mx-auto flex flex-wrap" key={index}>
            {element.map((q, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 p-4 flex flex-col">
              <Card {...q=q} />
            </div> 
            ))}
          </div>
        ))}
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const result = await fetch(`${process.env.SERVER_URL}/api/elements`)
  const elements = await result.json()

  const paths = elements.map((element) => ({
    params: { name: element.name }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // const { id } = context.query
  const res = await fetch(`${process.env.SERVER_URL}api/elements/${params.name}`)
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
    props: { token },
  } 
}

// export async function getServerSideProps(context) {
//   const { id } = context.query
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}api/elements/${id}`)
//     const json = await res.json()
//     const tokens = [json]
//     return {
//         props: {
//             results: tokens,
//         },
//     }
//   } catch(error) {
//     return { res: null, error: error }
//   }
// }

export default Element