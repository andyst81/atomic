const Hero = ({ results: query }) => {
  return (
    <div>

        {query.map((q, index) => (
            <div className="container mx-auto" key={index}>
              <div className="md:w-1/2 p-4">
                <div className="p-6 rounded-lg border border-grey-50">
                  <img className="rounded-full w-full object-cover object-center mb-6" src={"https://ipfs.io/ipfs/" + q.Image} alt="hero/minion image" />
                  <h3 className="tracking-widest text-blue-400 text-xl text-center font-medium title-font">{q.Name}</h3>
                  <h2 className="text-gray-900 font-medium text-l title-font">Element: {q.Element} ({q.Elemen_Total} / 3742)</h2>
                  <p className="leading-relaxed text-base">Group: {q.Group}</p>
                  <p className="leading-relaxed text-base">Background: {q.Background} ({q.BG_Total} / 3742)</p>
                  <p className="leading-relaxed text-base">Frame: {q.Frame} ({q.Frame_Total} / 3742)</p>
                  <p className="leading-relaxed text-base">Left Item: {q.Left} ({q.Left_Total} / 3742)</p>
                  <p className="leading-relaxed text-base">Right Item: {q.Right} ({q.Right_Total}/ 3742)</p>
                  <p className="leading-relaxed text-base">Left / Right Combo: </p>
                  <p className="leading-relaxed text-base">Flavour:</p>
                  <p className="leading-relaxed text-base">Variation:</p>
                  <p className="leading-relaxed text-base">Stance:</p>
                </div>
              </div>
            </div>
        ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/heroes/70`)
  const json = await res.json()
  const token = [json]
  return {
      props: {
          results: token,
      },
  }
}

export default Hero