import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeaderLayout from '../components/layout/Header/HeaderLayout';
import Seo from '../components/layout/Header/Title';

export default function App({ Component, pageProps }: AppProps) {
  // 이안에 header랑 footer 넣을꺼임

  return (
    <>

      <Seo disabled={true} title="main" />

      <Component {...pageProps} />
      
    </>
  );
}
