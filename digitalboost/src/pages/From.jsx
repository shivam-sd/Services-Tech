import React, { useState } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

const Form = () => {
  const [result, setResult] = useState("");
  const [order_amount, setOrderAmount] = useState("");
  const [customer_phone, setCustomerPhone] = useState("");
  const [customer_name, setCustomerName] = useState("");
  const [customer_email, setCustomerEmail] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    // Step 1: Send to Web3Forms
    const formData = new FormData(event.target);
    formData.append("access_key", "f6b7985c-4f0e-4b01-aa4e-b95ff83cbc50");

    try {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const web3Data = await web3Res.json();

      if (web3Data.success) {
        setResult("Form submitted successfully! Starting payment...");

        // Step 2: Initiate Cashfree Payment
        const customerDetails = {
          order_amount,
          customer_email,
          customer_name,
          customer_phone,
        };

        const sessionRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}payment`, customerDetails);

        if (sessionRes.data && sessionRes.data.payment_session_id) {
          const cashfree = await load({ mode: "production" });

          const checkoutOptions = {
            paymentSessionId: sessionRes.data.payment_session_id,
            redirectTarget: "_blank",
          };

          // Step 3: Start Cashfree Checkout
          await cashfree.checkout(checkoutOptions);

          // Step 4: Verify payment
          const verifyRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}verify`, {
            orderId: sessionRes.data.order_id,
          });

          if (verifyRes.data && verifyRes.data.status === "PAID") {
            alert("✅ Payment successful!");
          } else {
            alert("❌ Payment failed or pending.");
          }
        } else {
          setResult("Failed to initiate payment.");
        }
      } else {
        setResult("Form failed: " + web3Data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-8 bg-[#111827] h-screen">
      <div className="w-full lg:w-96 shadow-lg rounded-lg bg-black p-3">
        <form className="space-y-3" onSubmit={handleSubmitForm}>
          <h1 className="text-3xl text-white font-bold text-center">Fill Form For Pay</h1>
          <input
            type="text"
            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
            placeholder="Full Name"
            name="fullname"
            value={customer_name}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <input
            type="email"
            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
            placeholder="Email"
            name="email"
            value={customer_email}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
            placeholder="Phone Number"
            name="phone"
            value={customer_phone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
          />
          <input
            type="number"
            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
            placeholder="Pay Amount"
            name="Amount"
            value={order_amount}
            onChange={(e) => setOrderAmount(e.target.value)}
            required
          />
          <textarea
            rows="4"
            className="mt-1 text-white block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
            placeholder="Message"
            name="message"
          ></textarea>

          <span className="text-sm text-green-500">{result}</span>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Optional: Google Map */}
      <div className="w-full h-72 lg:w-1/2">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.014180707614!2d77.32304861110863!3d28.569336886846198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4494158f029%3A0x68d98edfb6957970!2sOcean%20Complex%2C%20P%20Block%2C%20Pocket%20A%2C%20Sector%2018%2C%20Noida!5e0!3m2!1sen!2sin!4v1743930999831!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Form;