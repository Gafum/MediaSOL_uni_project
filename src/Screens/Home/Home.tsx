import { useNavigate } from "react-router-dom"

import { screenList } from "../../Routing/RoutingList"
import StandardSection from "./MyComponents/StandardSection"
import ServicesSection from "./MyComponents/ServicesSection"
import ReviewsSection from "./MyComponents/ReviewsSection"
import OurPartners from "./MyComponents/OurPartners"

function Home(): JSX.Element {
   let navigate = useNavigate()

   return (
      <div className="text-primaryBlue">
         <StandardSection
            headline="Make your life better with new technology"
            description="New technology for very good price always important for your life. Be new, be cool, be modern and know everything about trends. Do you want this just open buy a new PC in this link below."
            btnText="Buy some gadgets"
            imgSrc="https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/aa96dbfb87e4f8c7e875f02bac65f4459a20d733170ad048abc7fc95/image/308204/1000x1000/110/0/n/e/nero_rev2_os-min_1_1.jpg"
            onClick={() => navigate(screenList.catalog.path)}
         />

         <ServicesSection />
         <OurPartners />
         <ReviewsSection />
      </div>
   )
}

export default Home
