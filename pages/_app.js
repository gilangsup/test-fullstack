import '../styles/globals.css'
import NavBar from '../component/navbar/navbar'

function MyApp({ Component, pageProps,router }) {
  return (<div><NavBar/> <Component router={router} {...pageProps} /></div>)
}

export default MyApp
