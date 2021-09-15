import {useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import {options} from '../src/options'

export default function Home() {

  const [token, setToken] = useState("")
  const [value, setValue] = useState("default")
  const router = useRouter()

  const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

  const handleParam = setToken => e => setToken(e.target.value)

  const tokenButtonClick = preventDefault(() => {
    router.push({
      pathname: `/heroes/${token}`
    })
  })

  // function findElement(elem) {
  //   return elem.name === value
  // }

  // function elemButtonClick() {
  //   setElemArray((prevState) => ({
  //     ...prevState,
  //     elemArray: options.find(findElement) }))
  //   console.log(value, elemArray);
  // };

  return (
    <div>
      <div>
      <Header />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>The Atomic Heroes - Token Viewer and Rarities</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container px-5 py-12 mx-auto ">
          <div>
            <form>
              <label className="text-gray-700">Element ID Number:</label>
              <input type='text' className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name='q'
                value={token}
                onChange={handleParam(setToken)}
                ></input>
              <div className="mb-2">
                <button className="px-5 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:text-indigo-400 hover:border-indigo-300 hover:ring hover:ring-indigo-200 hover:ring-opacity-50"
                  onClick={tokenButtonClick}>
                  Search
                </button>
              </div>
            </form>
            
            <label className="block">
              <span className="text-gray-700">Select</span>
              <select className="form-select block w-full my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                value={value}
                onChange={(e) => router.push({
                  pathname: `/element/${e.value}`
                })
              }
              >
                <option disabled hidden value='default'> -- Select an Element to View -- </option>
                {options.map(p => (
                  <option value={p.name} key={p.name}>{p.name}</option>
                ))}
             
              </select>
              {/* <button className="px-5 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:text-indigo-400 hover:border-indigo-300 hover:ring hover:ring-indigo-200 hover:ring-opacity-50"
                onClick={elemButtonClick}>
                Filter
              </button> */}
            </label>           
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <Footer/>
        </footer>
      </div>
    </div>
  )
}