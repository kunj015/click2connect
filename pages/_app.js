import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import BetaVersion from '../components/BetaVersion'

function MyApp({ Component, pageProps }) {
  return<>
  <BetaVersion/>
  <Navbar/>
    <Component {...pageProps} />
  <Footer/>
  </> 
}

export default MyApp
