import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeaderLayout from '../components/layout/Header/HeaderLayout';
import Seo from '../components/layout/Header/Title';
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {
  // 이안에 header랑 footer 넣을꺼임

  return (
    <>
      {/* kakao api */}
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0cb1b7e90d83dfaacea34b3204371e72&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />

      <Seo disabled={true} title="main" />

      <Component {...pageProps} />
      
    </>
  );
}
