import "./Achivment.css";
import {
  FaRegHeart,
  FaRegSmile,
  FaRegStar,
  FaRegClipboard,
} from "react-icons/fa";
import Link from "next/link";
import Product from "@/app/product/page";

const items = [
  {
    icon: <FaRegHeart />,
    title: "Heart Care",
    description: "Comprehensive heart health services.",
  },
  {
    icon: <FaRegSmile />,
    title: "Mental Health",
    description: "Dedicated support for mental well-being.",
  },
  {
    icon: <FaRegStar />,
    title: "Star Service",
    description: "Exceptional patient care and services.",
  },
  {
    icon: <FaRegClipboard />,
    title: "Medical Equipment Sales",
    description: "High-quality hospital equipment for sale.",
  },
];

export const Achivment = () => {

  return (
    <section className="Achivment">
      <div className="Achivment-background"></div>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <section className="h-4/5 w-4/6 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="lg:p-8 p-4 rounded shadow flex flex-col lg:gap-6 gap-2 bg-white hover:bg-green-500 cursor-pointer transition-all duration-300"
            >
              <div className="lg:text-7xl text-xl text-green-700 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-lg font-bold text-green-900 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-green-900 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <section className="h-[50vh] w-11/12 rounded-md bg-[#012f33] mx-auto p-8 lg:space-y-2 space-y-4 mb-14">
        <h1 className="lg:text-3xl text-lg text-white text-center">
          Why Choose <span className="text-green-500">KROY Health, Inc.</span>
          for Medical Equipment?
        </h1>
        <p className="text-white lg:text-xl text-xs text-justify lg:text-center lg:p-8">
          Discover the difference our hospital's medical equipment can make in
          your healthcare experience. We offer a wide range of high-quality
          hospital equipment designed to meet the needs of both medical
          professionals and patients. From state-of-the-art diagnostic tools to
          essential surgical instruments, our products are sourced from trusted
          manufacturers and rigorously tested for reliability and safety. Our
          knowledgeable staff is here to assist you in selecting the right
          equipment for your specific requirements, ensuring you receive the
          best value and performance. Trust our hospital for top-tier medical
          equipment that enhances patient care and supports your practice.
        </p>

        <Link href="/product">
       <button className="px-10 bg-green-600 py-3 text-green-900 rounded-md hover:bg-green-200 text-lg lg:block md:block mx-auto">
          View Products
        </button>
        </Link>  
      </section>
<Product/>
    </section>
  );
};
