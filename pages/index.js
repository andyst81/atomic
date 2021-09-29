import {useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../src/components/header'
import Key from '../src/components/key'
import Footer from '../src/components/footer'
import {options} from '../src/options'

export default function Home() {

  const [token, setToken] = useState("")
  const [tButton, setTButton] = useState(false)
  const [value, setValue] = useState("default")
  const [vButton, setVButton] = useState(false)
  const [collection, setCollection] = useState("heroes")

  const router = useRouter()

  const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

  const handleParam = setToken => e => setToken(e.target.value)

  const tokenButtonClick = preventDefault(() => {
    setTButton(true)
    if(isNaN(token)) {
      alert("Please enter an element ID number to view the token")
      return
    }
    router.push({
      pathname: `/${collection}/${token}`
    })
  })

  function elemButtonClick() {
    setVButton(true)
    router.push({
      pathname: `elements/${collection}/${value}`
    })
    console.log(value);
  };

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
            <Key />
            <br />
            <label className="block text-gray-700">
                <span className="text-gray-900">Select the collection you would like to view:</span>
                <select className="form-select block w-full my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleParam(setCollection)}  
                >
                  <option value='heroes'>The Atomic Heroes</option>
                  <option value='minions'>The Atomic Minions</option>
                </select>
              </label>
            <br/>
            <form>
              <label className="text-gray-700">Element ID Number:</label>
              <input type='text' className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name='q'
                value={token}
                onChange={handleParam(setToken)}
                ></input>
              <div className='flex justify-end'>
                <span className="mb-2 inline-flex">
                  <button className="px-5 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:text-indigo-400 hover:border-indigo-300 hover:ring hover:ring-indigo-200 hover:ring-opacity-50 inline-flex items-center"
                    onClick={tokenButtonClick}>
                    Search
                    {tButton ? <svg className="animate-spin ml-2 mr-2 h-5 w-5 text-grey-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg> : ""}
                  </button>
                </span>
              </div>
            </form>
            
            <label className="block">
              <span className="text-gray-700">Select</span>
              <select className="form-select block w-full my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                value={value}
                onChange={handleParam(setValue)}
              >
                <option disabled hidden value='default'> -- Select an Element to View -- </option>
                {options.map(p => (
                  <option value={p.name} key={p.name}>{p.name}</option>
                ))}
             
              </select>
              <div className='flex justify-end'>
                <span className="mb-2 inline-flex">
                  <button className="px-5 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:text-indigo-400 hover:border-indigo-300 hover:ring hover:ring-indigo-200 hover:ring-opacity-50 inline-flex items-center"
                    onClick={elemButtonClick}>
                    Filter
                    {vButton ? <svg className="animate-spin ml-2 mr-2 h-5 w-5 text-grey-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : ""}
                  </button>
                </span>
              </div>
            </label>    
      
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}