import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

const Element = ({ results: query }) => {

  return (
    <div>
      <Header />
      {query.map((element, index) => (            
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

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.SERVER_URL}api/elements/${id}`)
  const json = await res.json()
  const tokens = [json]
  return {
      props: {
          results: tokens,
      },
  }
}

export default Element