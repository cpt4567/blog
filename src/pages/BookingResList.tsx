export default function BookingResList() {
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
            <h2 className="tit">예약목록</h2>
          </div>

          <section className="res_info_sec type2">
						<div className="info_num">
							<p className="date">2022.11.01</p>
							<p className="number">예약번호 : <span>5032115</span></p>
						</div>
						<div className="info_div type2">
              <dl>
                <dt>신청사이트</dt>
                <dd>A사이트 / 사이트번호 : 3 / 1개</dd>
              </dl>
              <dl>
                <dt>이용기간</dt>
                <dd>1박 2일</dd>
              </dl>
              <dl>
                <dt>이용금액</dt>
                <dd>50,000원</dd>
              </dl>
              <dl>
                <dt>현재상태</dt>
                <dd>입금대기</dd>
              </dl>
            </div>
            <button type="button" className="btn_detail btn_gray">자세히보기</button>
					</section>

          <section className="bar_sort">
						<div className="info_num">
							<p className="date">2022.11.01</p>
							<p className="number">예약번호 : <span>5032115</span></p>
						</div>
						<div className="info_div type2">
              <dl>
                <dt>신청사이트</dt>
                <dd>A사이트 / 사이트번호 : 3 / 1개</dd>
              </dl>
              <dl>
                <dt>이용기간</dt>
                <dd>1박 2일</dd>
              </dl>
              <dl>
                <dt>이용금액</dt>
                <dd>50,000원</dd>
              </dl>
              <dl>
                <dt>현재상태</dt>
                <dd>입금대기</dd>
              </dl>
            </div>
            <button type="button" className="btn_detail btn_gray">자세히보기</button>
					</section>

          <section className="bar_sort">
						<div className="info_num">
							<p className="date">2022.11.01</p>
							<p className="number">예약번호 : <span>5032115</span></p>
						</div>
						<div className="info_div type2">
              <dl>
                <dt>신청사이트</dt>
                <dd>A사이트 / 사이트번호 : 3 / 1개</dd>
              </dl>
              <dl>
                <dt>이용기간</dt>
                <dd>1박 2일</dd>
              </dl>
              <dl>
                <dt>이용금액</dt>
                <dd>50,000원</dd>
              </dl>
              <dl>
                <dt>현재상태</dt>
                <dd>입금대기</dd>
              </dl>
            </div>
            <button type="button" className="btn_detail btn_gray">자세히보기</button>
					</section>
          
          <section className="bar_sort">
            <div className="paging_set">
              <button type="button" className="pg_prev">이전</button>
              <span className="txt">2/5</span>
              <button type="button" className="pg_next">다음</button>
            </div>
          </section>

        </div>

      </div>

    </div>
    )
}
