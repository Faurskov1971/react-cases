import '../styles/global.css';
import '../components/memory/index.css';
import './cases/targetsum/index.css';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}