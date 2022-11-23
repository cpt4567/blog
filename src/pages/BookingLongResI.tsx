export default function BookingLongResI() {
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
            <h2 className="tit">장박신청하기</h2>
          </div>

          <section className="res_info_sec">
            <div className="res_pay_area">
              <ul>
                <li>
                  <label htmlFor="name" className="tit">예약자명</label>
                  <input type="text" placeholder="홍길동" value="" className="inp_txt"/>
                </li>
                <li>
                  <label htmlFor="tel" className="tit">연락처<span> (필수)</span></label>
                  <div className="tel_area">
                    <input type="tel" pattern="[0-9]*" name="ord_h_telno1" id="ord_h_telno1" className="inp_txt" placeholder="010" aria-label="전화번호 앞 4자리" maxLength={4} value="" />
                    <span className="bar"></span>
                    <input type="tel" pattern="[0-9]*" name="ord_h_telno2" id="ord_h_telno2" className="inp_txt" placeholder="1234" aria-label="전화번호 중간 4자리" maxLength={4} value="" />
                    <span className="bar"></span>
                    <input type="tel" pattern="[0-9]*" name="ord_h_telno3" id="ord_h_telno3" className="inp_txt" placeholder="5678" aria-label="전화번호 끝 4자리" maxLength={4} value="" />
                  </div>
                </li>
                <li className="info_div type2">
                  <dl>
                    <dt>장박이용기간</dt>
                    <dd>2022.12.01 ~ 2023.02.28</dd>
                  </dl>
                  <dl>
                    <dt>장박정보</dt>
                    <dd>캠지기 상주 / 평일캠 가능</dd>
                  </dl>
                  <dl>
                    <dt>장박혜택</dt>
                    <dd>캠핑장 15분 거리에 비발디파크가 있어서 겨울철 아이들과 스키, 눈썰매를 이용하실 수 있습니다.
                      <br/><br/>
                      환불은 불가합니다.</dd>
                  </dl>
                </li>
                <li>
                  <label htmlFor="date" className="tit">신청기간</label>
                  <ul className="lst_check_period">
                    <li>
                      <input type="radio" id="period_num1" name="period_num"/>
                      <label htmlFor="period_num1">1개월</label>
                    </li>
                    <li>
                      <input type="radio" id="period_num2" name="period_num"/>
                      <label htmlFor="period_num2">2개월</label>
                    </li>
                    <li>
                      <input type="radio" id="period_num3" name="period_num"/>
                      <label htmlFor="period_num3">3개월</label>
                    </li>
                  </ul>
                </li>
                <li>
                  <label htmlFor="day" className="tit">신청일자</label>
                  <div className="date_div">
                    <input type="text" className="inp_txt date_prev" value="2022.12.01"/>
                    <span>-</span>
                    <input type="text" className="inp_txt"/>
                  </div>
                </li>
                <li>

                  <label className="tit">신청사이트</label>
                  <ul className="lst_check_site">
                    <li>
                      <input type="radio" id="site_num1" name="site_num"/>
                      <label htmlFor="site_num1">
                        <span className="ico_chk"></span>
                        <span className="iptxt">1</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num2" name="site_num"/>
                      <label htmlFor="site_num2">
                        <span className="ico_chk"></span>
                        <span className="iptxt">2</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num3" name="site_num"/>
                      <label htmlFor="site_num3">
                        <span className="ico_chk"></span>
                        <span className="iptxt">3</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num4" name="site_num"/>
                      <label htmlFor="site_num4">
                        <span className="ico_chk"></span>
                        <span className="iptxt">4</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num5" name="site_num"/>
                      <label htmlFor="site_num5">
                        <span className="ico_chk"></span>
                        <span className="iptxt">5</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num6" name="site_num"/>
                      <label htmlFor="site_num6">
                        <span className="ico_chk"></span>
                        <span className="iptxt">6</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num7" name="site_num"/>
                      <label htmlFor="site_num7">
                        <span className="ico_chk"></span>
                        <span className="iptxt">7</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="site_num8" name="site_num"/>
                      <label htmlFor="site_num8">
                        <span className="ico_chk"></span>
                        <span className="iptxt">8</span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li>
                  <label htmlFor="tel" className="tit">요창사항</label>
                  <div className="tel_area">
                    <input type="text" id="rec_rmk" name="rec_rmk" placeholder="내용을 입력해 주세요." className="inp_txt"/>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="bar_sort">
            <div className="sec_title">
							<h3 className="tit">결제금액<span className="txt">(부가세포함)</span></h3>
						</div>
            <div className="info_div">
              <div className="total_div type2">
                <p className="tit">총 결제금액</p>
                <p className="price">50,000<span>원</span></p>
              </div>
              <ul className="lst_txt type2">
                <li><span>2022.11.18 23:59:59</span>까지 결제(입금)되지 않으면자동으로 예약취소 됩니다</li>
              </ul>
            </div>
          </section>

          <section className="bar_sort">
            <div className="sec_title">
							<h3 className="tit">결제방법 선택</h3>
						</div>
            <div className="res_pay_area">
              <ul className="pay_list">
                <li>
                  <input type="radio" name="pay" id="payMode1"/>
                  <label htmlFor="payMode1">신용카드</label>
                </li>
                <li>
                  <input type="radio" name="pay" id="payMode2"/>
                  <label htmlFor="payMode2">가상계좌</label>
                </li>
                <li>
                  <input type="radio" name="pay" id="payMode3"/>
                  <label htmlFor="payMode3">무통장</label>
                </li>
              </ul>
            </div>
            <div id="divVBank" className="order_delivery">
              <h2 className="tp2">가상계좌입금정보</h2>
              <div className="delivery_htmlForm">
                <dl>
                  <dt className="last" style={{paddingTop:"10px"}}>입금은행</dt>
                  <dd>
                    <div className="selwp whf tp2" id="ref_code">
                      <select name="VbankBankCode" className="inp_txt">
                        <option value="003">기업은행 (00:30~23:30)</option>
                        <option value="004">국민은행 (00:30~23:30)</option>
                        <option value="005">외한은행 (01:00~22:45)</option>
                        <option value="011">농협중앙회 (00:30~23:30)</option>
                        <option value="020">우리은행 (00:30~23:30)</option>
                        <option value="081">하나은행 (00:30~23:30)</option>
                        <option value="088">신한은행 (00:30~23:30)</option>
                        <option value="031">대구은행 (08:00~23:00)</option>
                        <option value="032">부산은행 (00:30~23:30)</option>
                      </select>
                      <i className="fa fa-angle-down slt_arw" aria-hidden="true"></i>
                    </div>
                  </dd>
                  <dt className="last" style={{paddingTop:"10px"}}>현금영수증</dt>
                  <dd>
                    <div className="receipt_div clear">
                      <div className="receipt_type" style={{float:"left"}}>
                        <input type="radio" id="ReceiptType1" name="ReceiptType" value="1"/>
                        <label htmlFor="ReceiptType1">
                          <span className="ico_chk"></span>
                          <span className="iptxt">소득공제용</span>
                        </label>
                      </div>
                      <div className="receipt_type">
                        <input type="radio" id="ReceiptType2" name="ReceiptType" value="2" />
                        <label htmlFor="ReceiptType2">
                          <span className="ico_chk"></span>
                          <span className="iptxt">지출증빙용</span>
                        </label>
                      </div>
                      <div className="receipt_type">
                        <input type="radio" id="ReceiptType0" name="ReceiptType" value="0" />
                        <label htmlFor="ReceiptType0">
                          <span className="ico_chk"></span>
                          <span className="iptxt">미발행</span>
                        </label>
                      </div>
                    </div>
                  </dd>
                  <div className="ReceiptInput">
                    <dt className="last"></dt>
                    <dd>
                      <input type="hidden" name="ReceiptTypeNo"/>
                      <input id="ReceiptTypeNo1" className="inp_dv inp_txt" type="text" placeholder="휴대폰번호를 입력하여 주십시오."/>
                      <input id="ReceiptTypeNo2" className="inp_dv inp_txt" type="text" placeholder="사업자번호를 입력하여 주십시오."/>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>      
          </section>

          <section className="bar_sort">
            <div className="sec_title jc_sb">
							<h3 className="tit">약관동의</h3>
              <button type="button">전체동의</button>
						</div>
            <div className="res_pay_area">
              <div className="agree_box">
                <ul className="clear">
                  <li>
                    <input type="checkbox" id="agr2"/>
                    <label htmlFor="agr2">개인정보 수집 및 이용 동의<span>(필수)</span></label>
                  </li>
                  <li>
                    <input type="checkbox" id="agr3"/>
                    <label htmlFor="agr3">개인정보 제3자 제동 동의<span>(필수)</span></label>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <button
            type="button"
            id="BtnAdd"
            className="link_fixdfull"
          >예약하기
          </button>

        </div>

      </div>

    </div>
    )
}
  
