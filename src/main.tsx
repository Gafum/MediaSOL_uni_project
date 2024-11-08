import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Routing from "./Routing/Routing"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Routing />
   </StrictMode>
)
