import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const OpenChat = () => {
  return <div>

<Link to="tel:+9111945163" className=" text-3xl fixed lg:bottom-20 right-4 bottom-24"><FiPhoneCall className="text-green-500" /></Link>

<Link to="https://wa.me/9111945163" className=" text-3xl fixed lg:bottom-6 right-4 bottom-9"><FaWhatsapp className="text-green-500" /></Link>

  </div>;
};

export default OpenChat;
