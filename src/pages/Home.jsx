import { useDispatch, useSelector } from "react-redux";
import { Catagories, mockData } from "../assets/mockData"; // Assuming this path is correct
import CategorySection from "../components/CategorySection";
import InfoSection from "../components/InfoSection";
import { useEffect } from "react";
import { setProducts } from "../redux/ProductSlice";
import Shop from "./Shop";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CardSlice";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Home = () => {


  
  const dispatch = useDispatch();

// useSelector is a hook provided by react-redux.
// It allows your component to read data from the Redux store.

  // state => state.product is a selector function that says:
// “From the entire Redux store state, I want the product slice.”
  const products = useSelector( state => state.product  ) ;


  useEffect(   ()=>{

   dispatch(setProducts(mockData))

  },
  
  [ ])

 
  // Added To The Cart Handler 
  const handleAddToCart = (e , product)=> {
   
    e.stopPropagation()
    e.preventDefault() ;
    dispatch(addToCart(product));

    Swal.fire({
     title: "Added To The Cart Successfully ! ",
     icon: "success",
     draggable: true
   });
  }





  return (
    <div>

  
 


   
   <div className="bg-gray-50 mt-4 px-4 md:px-16 lg:px-24 "> {/* Adjusted background and margin-top */}
       
           <Helmet>
    <title>  Home </title>
  </Helmet>
     
     
      <div className="container mx-auto py-10 flex flex-col md:flex-row md:space-x-10"> {/* Increased vertical padding and horizontal space */}
        {/* Categories Section */}
        
        
        <div className="w-full md:w-3/12 mb-8 md:mb-0">
          <div className="bg-red-700 text-white text-xl font-bold py-4 px-5 rounded-t-xl shadow-lg"> {/* Darker red, larger text, more padding, rounded corners */}
            Shop By Categories
          </div>
          
          <Link to="/shop">

          <ul className="space-y-4 bg-white p-6 border border-gray-200 rounded-b-xl shadow-md"> {/* White background, increased padding, rounded corners */}
            {Catagories.map((catagory, index) => (
              <li
                key={index}
                className="flex items-center text-base text-gray-700 font-medium hover:text-red-700 transition duration-300 ease-in-out cursor-pointer group"
              >
                <div className="w-3 h-3 border-2 border-red-500 rounded-full mr-3 group-hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110"></div> {/* Slightly larger bullet, subtle scale on hover */}
                {catagory}
              </li>
            ))}
          </ul>
          
          </Link>
        </div>
        
       

        {/* Hero Section */}
        <div className="w-full md:w-9/12 h-[30rem] relative rounded-xl overflow-hidden shadow-xl group"> {/* Taller height, more rounded corners */}
          <img
            className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            src="/Images/hero-page.png" // Double-check this path relative to your public folder
            alt="Welcome to eShop"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start p-10 text-white"> {/* Darker overlay, more padding */}
            <p className="text-xl md:text-2xl font-light italic mb-2 drop-shadow-md"> {/* Lighter font, italic for a touch of elegance */}
              Discover endless possibilities...
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg tracking-wide"> {/* Larger, wider tracking */}
              WELCOME TO <span className="text-red-400">eSHOP</span> {/* Slightly softer red for contrast */}
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-8 drop-shadow-md"> {/* Increased bottom margin */}
              Explore Millions of Products
            </p>
           
           
            
           <Link to="/shop">
           
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out border-2 border-transparent hover:border-white"> {/* More padding, border effect on hover */}
              SHOP NOW !
            </button>
           
           
           </Link>
            
            
            
          </div>
        </div>
      </div>
     
    

    <InfoSection></InfoSection>
    <CategorySection></CategorySection>


 {/* Home | Top Producs Card's */}
    <div className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
          Our <span className="text-red-600">Top Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.products.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-lg p-6
                         hover:shadow-xl hover:border-red-400 transition-all duration-300 ease-in-out
                         transform hover:-translate-y-1 cursor-pointer group"
            >
              {/* Product Image */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center truncate w-full">
                {product.name}
              </h3>

              {/* Product Price */}
              <p className="text-xl font-bold text-red-600 mb-4">
                {product.price}
              </p>

              {/* Add to Cart Button */}
<div className="flex items-center justify-between w-full">
  {/* Fixed Golden Stars on the Left with minimal spacing */}
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400 mr-0.5 last:mr-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955h4.163c.969 0 1.371 1.24.588 1.81l-3.37 
        2.448 1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287
        -3.955-3.37-2.448c-.784-.57-.38-1.81.588-1.81h4.163l1.286-3.955z" />
      </svg>
    ))}
  </div>

  {/* Plus Button on the Right */}
  <button 
  
  onClick={ (e)=> handleAddToCart(e, product)}
  
  className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg
                     hover:bg-red-700 transition duration-300 transform hover:scale-130 shadow-md">
    +
  </button>
</div>






            </div>
          ))}
        </div>
      </div>
    </div>
   

   {/* Home | Top Producs Card's EEnds  */}





  <Shop></Shop>


  
    </div>


  


    </div>
  );
};

export default Home;