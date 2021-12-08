import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
