import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import  Head  from 'next/head';
function MyApp({ Component, pageProps,router }) {
  return (
    <ThemeProvider attribute="class">
       <Head>
        <title>Anas Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ' >
      <div className='col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ' >
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark "   >
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} /> 
      </AnimatePresence>

      </div>
  </div>
  </ThemeProvider>
  )
}

export default MyApp


