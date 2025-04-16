import React from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import ServicesData from "../components/ServicesData";


const ServicesDetails = () => {
  const { id } = useParams(); 

  // const navigate = useNavigate();
  

  const service = ServicesData.find((service) => service.s_no === id); 
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-500">Service Not Found</h1>
          <p className="text-gray-600">
            The service you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Service Details
          </h1>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Service ID:</h2>
            <p className="text-gray-600">{service.s_no}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Name:</h2>
            <p className="text-gray-600">{service.s_name}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Description:
            </h2>
            <p className="text-gray-600">{service.s_desc}</p>
            <br />
            <p className="text-gray-600">{service.s_desc1}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Pricing:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg shadow">
                <h3 className="text-md font-bold text-blue-700">Beginner</h3>
                <p className="text-gray-600">₹{service.begginer}</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-md font-bold text-green-700">
                  Intermediate
                </h3>
                <p className="text-gray-600">₹{service.intermediate}</p>
              </div>
              <div className="p-4 bg-red-100 rounded-lg shadow">
                <h3 className="text-md font-bold text-red-700">Advanced</h3>
                <p className="text-gray-600">₹{service.advanced}</p>
              </div>
            </div>
          </div>
          <div className="btn w-full flex justify-center">
            <Link
              className="bg-blue-500 text-white font-bold font-AfacadFlux  p-2 rounded-md mt-4 inline-block hover:bg-blue-600 transition duration-300"
              target="_blank"
              to="/form"
              rel="noopener noreferrer"
            >
              Send Request
            </Link>
          </div>
          <div className="btn w-full flex justify-center mt-4">
            <Link
            to={"/"}
              // onClick={handleBackClick}
              className="bg-gray-500 text-white font-bold p-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Go Back
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
