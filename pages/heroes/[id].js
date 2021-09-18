import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'

const Hero = ({ results: query }) => {
  return (
    <div>
      <Header />
      {query.map((q, index) => (
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

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/api/heroes/${id}`)
  const json = await res.json()
  const token = [json]
  return {
      props: {
          results: token,
      },
  }
}

export default Hero