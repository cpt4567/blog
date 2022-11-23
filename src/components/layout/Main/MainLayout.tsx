import FooterLayout from "../Footer/FooterLayout";
import HeaderLayout from "../Header/HeaderLayout";

interface Props {
  children:React.ReactNode
  Isfooter:boolean
}

export default function MainLayout({children,Isfooter}:Props) {
  // header default
  return (
    <div className="wrap" id="wrap">

      <div className="wrap_in">

        <HeaderLayout/>

        <div className="container">

            {children}
            
        </div>

      </div> 

      { Isfooter && <FooterLayout/> } 

    </div>
  );
}
