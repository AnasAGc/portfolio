import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ' >
      <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl'>
        <Sidebar/>
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl" >
      <Component {...pageProps} />
      </div>
  </div>
  )
}

export default MyApp
