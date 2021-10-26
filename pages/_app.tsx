import '../styles/global.css';
import '../components/memory/index.css';
import '../components/targetsum/index.css';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}