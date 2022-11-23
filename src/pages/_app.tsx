import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HeaderLayout from '../components/layout/Header/HeaderLayout';
import Seo from '../components/layout/Header/Title';
import Script from 'next/script';
import { Map ,MapMarker } from  "react-kakao-maps-sdk"


export default function App({ Component, pageProps }: AppProps) {
  // 이안에 header랑 footer 넣을꺼임

  const NEXT_PUBLIC_KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

  return (
    <>
      {/* kakao api */}
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_KEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
    
      <Seo disabled={true} title="main" />

      <Component {...pageProps} />
      
    </>
  );
}
