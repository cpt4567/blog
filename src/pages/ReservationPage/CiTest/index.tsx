import CampInform from "./_atomic/CampInform";
import Inform from "./_atomic/Inform";
import Swiper from "./_atomic/Swiper";

export default function  TopSection () {

    return (     
    <section className="ci_top_sec">
          
        <Swiper/>

        <Inform/>

        <CampInform/>

    </section>
    )

}

