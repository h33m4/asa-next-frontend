import '@styles/styles.css'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return (
  <>
    <Header title="Art School Africa" />
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default Application
