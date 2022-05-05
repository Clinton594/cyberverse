import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import HtmlHead from '../components/HtmlHead'

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <HtmlHead/>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
