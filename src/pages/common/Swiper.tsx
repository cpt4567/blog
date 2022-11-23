interface Props {

}
// NOTE :: Swiper
/**
 * @cpt4567 작업자
*/
export default function Swiper() {
    return (
        <div className="swiper-container ci_top_swiper">

        <ul className="swiper-wrapper">
            <li className="swiper-slide">
                <a href="#n">
                    <img src="../images/temp/dtl_temp01.png"/>
                </a>
                <p className="info_txt"><span>공주북캠프 글램핑 야경</span></p>
            </li>
            <li className="swiper-slide">
                <a href="#n">
                    <img src="../images/temp/camp_temp01.png"/>
                </a>
                <p className="info_txt"><span>공주북캠프 글램핑 야경</span></p>
            </li>
            <li className="swiper-slide">
                <a href="#n">
                    <img src="../images/temp/camp_temp01.png"/>
                </a>
                <p className="info_txt"><span>공주북캠프 글램핑 야경</span></p>
            </li>
        </ul>
        <div className="pagination_com swiper-pagination"></div>

    </div>
    )
}