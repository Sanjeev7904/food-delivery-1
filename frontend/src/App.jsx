import Navbar from "./componets/Navbar/navbar"
import Home from "./pages/Home/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Placeholder from "./pages/placeorder/placeholder";
import Card from "./pages/card/card";
import Footer from "./componets/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
   element: 
    <div>
      <Navbar/>
    <Home/>
    </div>
    
 },
 
 {
    path: "/card",
     element: 
    <div>
      <Navbar/>
     <Card/>
    </div>

 },
  {
    path: "/placeholder",
      element: 
     <div>
      <Navbar/>
     <Placeholder/>
    </div>

     // Shared layout with navbar/footer
    
    
  },

]);




function App() {
  
  

  return (
    <>


     
     
    <RouterProvider router={router} />

    <Footer/>
   
    </>
  )
}

export default App
