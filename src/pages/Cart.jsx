import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deCreaseQuatity, inCreaseQuatity, removeFromCart } from "../redux/CardSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Handler with confirmation before removing
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire("Removed!", "Your item has been removed from the cart.", "success");
      }
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      {cart.products.length > 0 ? (
        <div className="max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 border-b pb-2">SHOPPING CART</h3>

          <div className="hidden md:grid grid-cols-5 font-semibold text-gray-600 border-b py-2">
            <p className="col-span-2">PRODUCT</p>
            <p className="text-center">PRICE</p>
            <p className="text-center">QUANTITY</p>
            <p className="text-center">REMOVE</p>
          </div>

          <div>
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-5 items-center py-4 border-b text-sm md:text-base"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{product.name}</span>
                </div>

                <p className="text-center"> {product.price}</p>

                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => dispatch(deCreaseQuatity(product.id))}
                    className="w-7 h-7 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => dispatch(inCreaseQuatity(product.id))}
                    className="w-7 h-7 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-sm bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-4">CART TOTALS</h4>
              <p className="mb-2">
                <span className="font-medium">Total Items:</span> {cart.products.length}
              </p>
              <p className="mb-2">
                <span className="font-medium">Shipping:</span> shipping to{" "}
                <span className="font-semibold"> Queens , NYC </span>
              </p>

              <p className="mb-4">
                <span className="font-medium">Total Price:</span>{" "}
                <span className="font-bold text-green-600">
                  $
                  {cart.products
                    .reduce((acc, item) => {
                      const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                      const quantity = item.quantity || 1;
                      return acc + (isNaN(numericPrice) ? 0 : numericPrice * quantity);
                    }, 0)
                    .toFixed(2)}
                </span>
              </p>

              <button
              
              onClick={()=> navigate('/checkout')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <img
            src="/Images/Images/emptycart.png"
            alt="Empty Cart"
            className="w-60 md:w-80"
          />
          <h2 className="text-2xl font-semibold mt-4 text-gray-600">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">Looks like you haven’t added anything yet.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
