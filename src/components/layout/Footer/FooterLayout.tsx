export default function FooterLayout() {
  return (<>

    <div className="footer">

                    <div className="foot_top">
                        <p className="tit">캠핑장이름</p>
                        <ul className="ft_ul">
                            <li>
                                <dl>
                                    <dt>전화번호</dt>
                                    <dd>0504-2016-1707</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>주소</dt>
                                    <dd>인천 강화군 화도면 해안남로 1998 (흥왕리) 8-28</dd>
                                </dl>
                            </li>
                        </ul>
                        <p className="txt">
                            하비비커뮤니케이션은 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게
                            있습니다.
                            <span>
                                <em>예약관리(입금확인/취소/변경/환불)</em>에 대한 문의는 [강화 오크힐글램핑]으로 해주시기 바랍니다.</span>
                        </p>
                        <a href="tel:0504-2016-1707" className="btn_call">통화하기</a>
                    </div>
                    <div className="foot_btm type2">
                        <p className="tit">주식회사 하비비커뮤니케이션 - 예약시스템제공</p>
                        <ul className="fb_ul">
                            <li>
                                <dl>
                                    <dt>주소</dt>
                                    <dd>서울특별시 마포구 연남로 45, 3층(연남동)</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>대표자</dt>
                                    <dd>강동구</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>사업자번호</dt>
                                    <dd>752-88-01786</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>통신판매번호</dt>
                                    <dd>제2020-서울마포-3249호</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>전화번호</dt>
                                    <dd>02-6959-5622</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>이메일주소</dt>
                                    <dd>camperstory@naver.com</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>

                </div>

    <div className="btm_foot">
      <div className="btn_set type3">
        <ul>
            <li>
                <button className="btn_share">
                    <span></span></button>
            </li>
            <li className="btn_wp">
                <button className="btn_long type2">
                    <span>장박예약</span></button>
                <button className="btn_food type2">
                    <span>먹거리구매</span></button>
                <button className="btn_res">
                    <span>예약확인</span></button>
            </li>
        </ul>
      </div>
    </div>
    </>
  );
}
