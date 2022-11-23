export default function BookingComplete() {
  return (
    <div className="wrap" id="wrap">
    <div className="wrap_in">
      <div className="head">
        <div className="head_in">
          <h1>
            <span>캠핑장이름</span>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="com_title">
          <h2 className="tit">예약내역</h2>
        </div>

        <section className="res_info_sec type2">
          <div className="sec_title">
            <h3 className="tit">예약신청 정보</h3>
          </div>
          <div className="info_div type2">
            <dl>
              <dt>예약번호</dt>
              <dd>5309136</dd>
            </dl>
            <dl>
              <dt>사이트(객실)</dt>
              <dd>A사이트, 3</dd>
            </dl>
            <dl>
              <dt>기간</dt>
              <dd>11.03(수) ~ 11.04(목) / 1박</dd>
            </dl>
            <dl>
              <dt>예약인원</dt>
              <dd>총 4명 (성인 2명, 소인 2명)</dd>
            </dl>
            <dl>
                <dt>예약차량</dt>
                <dd>1대</dd>
            </dl>
            <dl>
              <dt>숙박요금(1박)</dt>
              <dd><em>50,000원</em>
                11.03(수) ~ 11.04(목) / 평일 : 50,000원</dd>
            </dl>
            <div className="total_div">
              <p className="tit">총 이용금액</p>
              <p className="price">50,000<span>원</span></p>
            </div>
          </div>
        </section>

        <section className="bar_sort">
          <div className="sec_title">
            <h3 className="tit">예약자 정보</h3>
          </div>
          <div className="info_div type2">
            <dl>
              <dt>예약자명</dt>
              <dd>홍길동</dd>
            </dl>
            <dl>
              <dt>휴대폰 번호</dt>
              <dd>010-1111-2222</dd>
            </dl>
            <dl>
              <dt>차량번호</dt>
              <dd>102나1233</dd>
            </dl>
            <dl>
              <dt>요청사항</dt>
              <dd>요청사항 내용이 없습니다.</dd>
            </dl>
          </div>
        </section>

        <section className="bar_sort">
          <div className="sec_title">
            <h3 className="tit">결제정보</h3>
          </div>
          <div className="info_div type2">
            <dl>
              <dt>총 결제금액</dt>
              <dd className="price">50,000<span>원</span></dd>
            </dl>
            <dl>
              <dt>땡큐캠핑 적립금</dt>
              <dd><em>2,000원</em>예약일 다음날 적립됩니다.</dd>
            </dl>
            <dl>
              <dt>계좌정보</dt>
              <dd>농협중앙회 / 351-11410771-83 / 변인혜</dd>
            </dl>
            <dl>
              <dt>입금마감일</dt>
              <dd>2022.11.01 03:23:00</dd>
            </dl>
            <dl>
              <dt>결제방법</dt>
              <dd>업체계좌</dd>
            </dl>
            <dl>
              <dt>현재상태</dt>
              <dd><em>입금대기</em></dd>
            </dl>
          </div>
        </section>

        <button
          type="button"
          id="BtnAdd"
          className="link_fixdfull"
          >예약목록
        </button>

      </div>

    </div>

  </div>
  )
}

