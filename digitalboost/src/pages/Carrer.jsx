import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Carrer = () => {
  return (
    <>
      <Header />
      <div className="bg-emerald-900 text-white min-h-screen px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Career Opportunities</h1>
            <p className="text-lg text-gray-200">
              We’re building something meaningful. Join our passionate team and
              be part of a digital transformation journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Job Card 1 */}
            <div className="bg-emerald-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
              <p className="text-gray-200 mb-4">
                Looking for someone skilled in React.js & Tailwind CSS to create
                beautiful and performant user interfaces.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Remote</span>
                <span>Full-Time</span>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-emerald-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Backend Developer</h2>
              <p className="text-gray-200 mb-4">
                Join our backend team with expertise in Node.js, MongoDB & API
                development. Experience with cloud preferred.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Remote</span>
                <span>Contract</span>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-emerald-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">
                Digital Marketing Specialist
              </h2>
              <p className="text-gray-200 mb-4">
                Manage campaigns, SEO, and content strategy to grow our digital
                presence and engage the right audience.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Hybrid</span>
                <span>Part-Time</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-2">Didn’t see your role?</h2>
            <p className="text-gray-300 mb-4">
              We’re always open to talent! Drop us your resume and tell us how
              you can make a difference.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrer;
