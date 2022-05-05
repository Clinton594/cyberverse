import '../styles/globals.css'
import HtmlHead from '../components/HtmlHead'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <HtmlHead/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
