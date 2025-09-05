import React from "react";
import { Globe, Code, Cloud } from "lucide-react"; // using lucide icons for modern feel

const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "Tailored strategies that align with your vision and drive sustainable growth.",
      icon: <Globe size={40} className="text-green-500" />,
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    },
    {
      title: "Web Development",
      description:
        "Scalable and modern websites built with cutting-edge technologies.",
      icon: <Code size={40} className="text-green-500" />,
      image:
        "https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_640.jpg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Secure and optimized cloud services to power your digital transformation.",
      icon: <Cloud size={40} className="text-green-500" />,
      image:
        "https://cdn.pixabay.com/photo/2024/02/26/17/05/cloud-8598424_640.jpg",
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-green-600">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
