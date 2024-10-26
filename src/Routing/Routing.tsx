import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "../Components/Errors/Error404";
import { screenList } from "./RoutingList";
import Header from "../Components/Header/Header";


function Router(): JSX.Element {
   const location = useLocation()
   return (
      <Routes location={location} key={location.pathname}>
         {screenList.map(({ component, path }) => {
            return (
               <Route
                  key={path}
                  path={path}
                  element={
                     <div className="container">
                        {component}
                     </div>
                  }
               />
            )
         })}

         <Route path="*" element={<Error404 />} />
      </Routes>
   );
}



function MainRouter(): JSX.Element {

   return (
      <BrowserRouter>
         <Header />
         <Router />
      </BrowserRouter>
   );
}

export default MainRouter;