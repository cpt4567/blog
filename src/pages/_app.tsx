import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // 이안에 header랑 footer 넣을꺼임
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
