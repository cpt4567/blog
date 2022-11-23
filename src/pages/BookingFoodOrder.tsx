import Image from "next/image";
import img from "../../public/images/banner01.png"

import food_temp01 from "../../public/images/food_temp01.png"

export default function BookingFoodOrder() {
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
          <section className="banner_sec">
            <Image
            src={img}
            alt="as"
            />
            {/* <img src="/images/banner01.png" alt="" srcSet=""/> */}
          </section>
          <section>
            <div className="sec_title">
              <h3 className="tit">먹거리 선택</h3>
            </div>
            <div className="food_div type2">
              <ul className="lst_food">
                <li className="fd_box">
                  <div className="fd_box_item clear">
                    
                    <div className="pic">
                      <Image
                        src={food_temp01}
                        alt="as"/>
                    </div>
                    
                    <div className="txt_box">
                      <p className="tit">[인기상품]국물쫄볶이</p>
                      <p className="txt">안먹어본 캠퍼는 있어도 한번만 먹어본캠퍼는 없다!</p>
                    </div>
                    <a href="#n" className="more_a">상세보기</a>
                  </div>
                  <div className="count_box">
                    <div className="count">
                      <p className="pri">+ <em>9,400</em>원</p>
                      <a href="#n" className="minus"><img src="/images/count_minus.png" alt=""/></a>
                      <span><input type="number" value="1"/></span>
                      <a href="#n" className="plus"><img src="/images/count_plus.png" alt=""/></a>
                    </div>
                  </div>
                </li>
                <li className="fd_box">
                  <div className="fd_box_item clear">
                    <div className="pic"><img src="/images/temp/food_temp01.png" alt=""/></div>
                    <div className="txt_box">
                      <p className="tit">[인기상품]국물쫄볶이</p>
                      <p className="txt">안먹어본 캠퍼는 있어도 한번만 먹어본캠퍼는 없다!</p>
                    </div>
                    <a href="#n" className="more_a">상세보기</a>
                  </div>
                  <div className="count_box">
                    <div className="count">
                      <p className="pri">+ <em>9,400</em>원</p>
                      <a href="#n" className="minus"><img src="/images/count_minus.png" alt=""/></a>
                      <span><input type="number" value="1"/></span>
                      <a href="#n" className="plus"><img src="/images/count_plus.png" alt=""/></a>
                    </div>
                  </div>
                </li>
                <li className="fd_box">
                  <div className="fd_box_item clear">
                    <div className="pic"><img src="/images/temp/food_temp01.png" alt=""/></div>
                    <div className="txt_box">
                      <p className="tit">[인기상품]국물쫄볶이</p>
                      <p className="txt">안먹어본 캠퍼는 있어도 한번만 먹어본캠퍼는 없다!</p>
                    </div>
                    <a href="#n" className="more_a">상세보기</a>
                  </div>
                  <div className="count_box">
                    <div className="count">
                      <p className="pri">+ <em>9,400</em>원</p>
                      <a href="#n" className="minus"><img src="/images/count_minus.png" alt=""/></a>
                      <span><input type="number" value="1"/></span>
                      <a href="#n" className="plus"><img src="/images/count_plus.png" alt=""/></a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="bar_sort">
                <div className="total_div">
                  <p className="tit">총 이용금액</p>
                  <p className="price">50,000<span>원</span></p>
                </div>
                <p className="addr">경남 거창군 북상면 덕유월성로 1199 월성 자연캠핑야영장</p>
              </div>
              
            </div>
        </section>

          <section className="res_info_sec bar_sort">
            <div className="res_pay_area">
              <ul>
                <li>
                  <label htmlFor="tel" className="tit">배송일자</label>
                  <div className="tel_area">
                    <input type="text" id="rec_rmk" name="rec_rmk" className="inp_txt"/>
                  </div>
                </li>
                <li>
                  <label htmlFor="name" className="tit">구매자명</label>
                  <input type="text" placeholder="홍길동" value="" className="inp_txt"/>
                </li>
                <li>
                  <label htmlFor="tel" className="tit">휴대폰번호</label>
                  <div className="tel_area">
                    <input type="tel" pattern="[0-9]*" name="ord_h_telno1" id="ord_h_telno1" className="inp_txt" placeholder="010" aria-label="전화번호 앞 4자리" maxLength={4} value="" />
                    <span className="bar"></span>
                    <input type="tel" pattern="[0-9]*" name="ord_h_telno2" id="ord_h_telno2" className="inp_txt" placeholder="1234" aria-label="전화번호 중간 4자리" maxLength={4} value="" />
                    <span className="bar"></span>
                    <input type="tel" pattern="[0-9]*" name="ord_h_telno3" id="ord_h_telno3" className="inp_txt" placeholder="5678" aria-label="전화번호 끝 4자리" maxLength={4} value="" />
                  </div>
                </li>
                <li>
                  <label htmlFor="tel" className="tit">비밀번호</label>
                  <div className="tel_area">
                    <input type="text" id="rec_rmk" name="rec_rmk" placeholder="주문취소/배송정보 수정에 사용됩니다." className="inp_txt"/>
                  </div>
                </li>
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
							<h3 className="tit">주의사항</h3>
						</div>
            <div className="res_pay_area">
              <div className="agree_box">
                <ul className="clear">
                  <li>
                    <input type="checkbox" id="agr1"/>
                    <label htmlFor="agr1">주의사항 동의</label>
                  </li>
                </ul>
              </div>
              <ul className="lst_txt">
                <li>배송 후에는 취소/환불이 되지 않습니다.</li>
                <li>우체국 택배로 배송되며, 배송도착은 선택하신 배송일자 오후 3시 입니다.(도착시간은 상황에 따라 달라질 수 있습니다.)</li>
              </ul>
            </div>
          </section>

          <button
            type="button"
            id="BtnAdd"
            className="link_fixdfull"
            >먹거리 구매하기
          </button>

        </div>

      </div>

    </div>
    ) 
}
  
