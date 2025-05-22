import { BrowserRouter, Route, Routes } from "react-router-dom"
import  "./App.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"

function App() {


  return (
    <>
      
  <BrowserRouter>

  <NavBar></NavBar>
  
  <Routes>


    
     <Route  path="/" element={ <Home/>  }  >      </Route>
     <Route  path="/shop" element={ <Shop/> }  >   </Route>
     <Route  path="/cart" element={ <Cart/> }  >   </Route>
     <Route  path="/contact" element={ <ContactPage/>}  >   </Route>
     <Route  path="/about" element={ <AboutPage/>}  >   </Route>





     



  </Routes>
  
  
   

   <Footer></Footer>
  
  </BrowserRouter>




    </>
  )
}

export default App
