import { BrowserRouter, Route, Routes } from "react-router-dom"
import  "./App.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"

function App() {


  return (
    <>
      
  <BrowserRouter>

  <NavBar></NavBar>
  
  <Routes>


    
     <Route  path="/" element={ <Home/>  }  >      </Route>
     <Route  path="/shop" element={ <Shop/> }  >   </Route>





     



  </Routes>
  
  
   

   <Footer></Footer>
  
  </BrowserRouter>




    </>
  )
}

export default App
