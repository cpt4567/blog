import MainLayout from "../../components/layout/Main/MainLayout";
import DetailSection from "../../components/ReservationPage/detailSection";
import ReviewInform from "../../components/ReservationPage/reviewSection/_atomic/ReviewInform";
import TopSection from "../../components/ReservationPage/topSection";
import UserInfoSection from "../../components/ReservationPage/userInfoSection";


export default function ReservationPage() {
    return (
    <MainLayout Isfooter={ true } >
    
      <TopSection/>
      
      <UserInfoSection/>

      <DetailSection/>

      <ReviewInform/>

 
  </MainLayout>
    )
}