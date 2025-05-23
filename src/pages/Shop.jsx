import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CardSlice";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Shop = () => {

    const dispatch = useDispatch();

  const products = useSelector( state => state.product  ) ;


  

 
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

         <Helmet>
    <title>  Shop </title>
     
     </Helmet>


             <div className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
          Shop  <span className="text-red-600"> Now !</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.products.map((product) => (
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
        </div>
    );
};

export default Shop;