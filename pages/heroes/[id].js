const Hero = ({ results: query }) => {
  return (
    <div>
        {query.map((q, index) => (
            <div className="container mx-auto" key={index}>
              <div className="md:w-1/2 p-4">
                <div className="p-6 rounded-lg border border-grey-50">
                  <img className="rounded-full w-full object-cover object-center mb-6" src={"https://ipfs.io/ipfs/" + q.Image} alt="hero/minion image" />
                  <h3 className="tracking-widest text-blue-400 text-xl text-center font-medium title-font">{q.Name}</h3><br/>
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-gray-900 font-medium text-l title-font">Element: </td>
                        <td>{q.Element}</td>
                        <td>{q.elem_conc}</td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Group: </td>
                        <td>{q.Group}</td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Background: </td>
                        <td>{q.Background}</td>
                        <td> {q.bg_conc}</td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Frame: </td>
                        <td>{q.Frame}</td>
                        <td>{q.frame_conc}</td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Left Item:</td>
                        <td> {q.Left_Item} </td>
                        <td>{q.left_conc} </td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Right Item:</td>
                        <td> {q.Right_Item} </td>
                        <td>{q.right_conc}</td>
                      </tr>
                      {/* <tr>
                        <td className="leading-relaxed text-base">Left / Right Combo: </td>
                        <td></td>
                        <td></td>
                      </tr> */}
                      <tr>
                        <td className="leading-relaxed text-base">Flavour:</td>
                        <td>{q.Flavor}</td>
                        <td>{q.flav_conc}</td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Variation:</td>
                        <td>{q.Variation}</td>
                        <td>{q.var_conc}</td>
                      </tr>
                      <tr>
                        <td className="leading-relaxed text-base">Stance:</td>
                        <td>{q.Stance}</td>
                        <td>{q.stance_conc}</td>
                      </tr>  
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        ))}
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