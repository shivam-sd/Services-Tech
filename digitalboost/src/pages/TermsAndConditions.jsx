import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-900 text-gray-200 min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            Terms & Conditions
          </h1>

          <p className="mb-4">
            Welcome to our website. By accessing or using our services, you
            agree to be bound by these Terms and Conditions. Please read them
            carefully before proceeding.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using this website, you acknowledge that you have read,
            understood, and agree to these Terms. If you do not agree, please do
            not use the website.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            2. Use of Services
          </h2>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in a
            manner that does not infringe on the rights of, restrict, or inhibit
            anyone else's use and enjoyment of the website.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            3. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this site, including text, graphics, logos, and
            images, is the property of the website owner and protected by
            applicable copyright laws.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            4. User Responsibilities
          </h2>
          <p className="mb-4">
            Users are responsible for maintaining the confidentiality of their
            account information and for all activities that occur under their
            account.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            5. Modifications to Terms
          </h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Changes will
            be effective immediately upon posting on the website. Continued use
            of the site after changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">
            6. Contact
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms & Conditions, feel free
            to contact us via the information provided on the Contact Us page.
          </p>

          <p className="text-sm text-gray-400 mt-10">
            Last updated: April 6, 2025
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
