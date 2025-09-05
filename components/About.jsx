import React from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/11/52/computer-1869306_640.jpg"
              alt="About SR2 Edge"
              className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg object-cover 
                       transform transition-all duration-700 ease-out 
                       animate-slideInLeft hover:scale-105"
            />
          </div>

          {/* Right Column - Content */}
          <div className="text-center md:text-left animate-fadeIn delay-200">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              About <span className="text-green-600">Us</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At{" "}
              <span className="text-green-600 font-semibold">
                SR<sup>2</sup> Edge
              </span>
              , we are a global provider of innovative digital solutions. Our
              mission is to help businesses adapt seamlessly to evolving
              technology landscapes with strategies that are scalable,
              efficient, and impactful.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong focus on innovation and customer satisfaction, we
              empower organizations worldwide to achieve their goals through
              cutting-edge technology, modern designs, and dedicated support.
            </p>

            <button className="mt-8 px-8 py-3 bg-green-600 text-white font-medium rounded-full shadow-md hover:bg-green-700 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
