import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { clearCart } from "../redux/CardSlice";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const totalPrice = cart.products
    .reduce((acc, item) => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      const quantity = item.quantity || 1;
      return acc + (isNaN(numericPrice) ? 0 : numericPrice * quantity);
    }, 0)
    .toFixed(2);

 const handlePayment = () => {
  const { fullName, email, address, city, postalCode, country } = formData;

  if (!fullName || !email || !address || !city || !postalCode || !country) {
    Swal.fire({
      icon: "warning",
      title: "Incomplete Form",
      text: "Please fill out all billing fields before proceeding.",
      confirmButtonColor: "#d32f2f",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Payment Successful!",
    text: "Your order has been placed.",
    confirmButtonColor: "#d32f2f",
  }).then(() => {
    // ✅ Reset form fields after payment
    setFormData({
      fullName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });
    
     // ✅ Clear order summary
  dispatch(clearCart());


  });
};

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Billing Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Billing Information</h2>
          <form className="grid grid-cols-1 gap-4">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500"
              required
            />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500"
              required
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500"
              required
            />
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              type="text"
              placeholder="Postal Code"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500"
              required
            />
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500"
              required
            />
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between text-sm border-b pb-2"
              >
                <span className="font-medium text-gray-700">
                  {product.name} × {product.quantity}
                </span>
                <span className="text-gray-600">
                  $
                  {(
                    parseFloat(product.price.replace(/[^0-9.]/g, "")) *
                    product.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-between font-semibold text-xl pt-4">
              <span>Total:</span>
              <span className="text-red-600">${totalPrice}</span>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handlePayment}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-xl shadow-lg text-lg"
          >
            Confirm & Pay
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CheckOut;
