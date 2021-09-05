import Head from 'next/head'
import Header from './components/header'
import Card from './components/card'
import Footer from './components/footer'

export default function Home() {
  fetch(`api/hydrogen.json`)
  .then(response => response.json())
  .then(data => console.log(data))


  return (
    <div>
      <div>
      <Header />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container px-5 py-24 mx-auto ">
          <div>
          {/*   <div class="p-8">
              <div class="bg-white flex items-center rounded-full shadow">
                <option class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                
                <div class="p-4">
                  <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
                    </svg>
                  </button>
                  </div>
              </div>
            </div> */}

            <label>Element Name:</label><input type='text' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
            <div class="block">
              <span class="text-gray-700">Group:</span>
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input class="form-checkbox" type="checkbox" />
                    <span class="ml-2">Group 1</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input class="form-checkbox" type="checkbox" />
                    <span class="ml-2">Group 2</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input class="form-checkbox" type="checkbox" />
                    <span class="ml-2">Group 3</span>
                  </label>
                </div>
              </div>
            </div>
            
          </div>
          
          <div class="flex flex-wrap -m-4 items-center justify-center">
            

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <Footer/>
        </footer>
      </div>
    </div>
  )
}
