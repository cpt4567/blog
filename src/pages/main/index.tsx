import Seo from '../../components/layout/Header/Title';
import Link from 'next/link';

export default function Booking_Gate() {
  return (
    <>
      <Seo disabled={true} title="캠핑은 여행이다." />
      <body>
        <div className="wrap" id="wrap">
          <div className="splash_set">
            <div className="splash">
              <div className="splash_in">
                <div className="top_logo">
                  <img src="../images/logo_white2.png" />
                </div>
                <Link href="/">
                  <a className="web_link">모바일웹으로 예약하기</a>
                </Link>
                <div className="txt_box">
                  <p style={{ whiteSpace: 'pre-wrap' }}>
                    지금 앱 다운받고
                    <br />
                    다양한 혜택을 경험하세요.
                  </p>
                  <a className="app_link" href="#!">
                    땡큐캠핑 앱으로 예약
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
