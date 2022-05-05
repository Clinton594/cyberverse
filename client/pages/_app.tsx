import HtmlHead from '../components/HTMLHead'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";


function MyApp({ Component, pageProps }) {
  return (
      <>
        <HtmlHead/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
