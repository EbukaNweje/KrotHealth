import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="NewAboutBody bg-[#f4fcfc]">
      <div className="aboutimagediv">
        <div className="wrapper">
          <div className="overlay"></div>
        </div>
      </div>
      <header className="flex flex-col mb-8">
        <div className="text-[#04d15a] text-4xl text-center p-4 space-y-4">
          <h3>Service</h3>
        </div>
        <div className="lg:text-5xl text-2xl text-green-950 text-center">
          How Can We Help You?
        </div>
        <div className="lg:px-14 px-6 lg:text-center text-justify">
          <p>
            At our hospital, we are dedicated to providing comprehensive care to
            meet all your health needs. From immediate, life-saving emergency
            services and advanced surgical procedures to state-of-the-art
            radiology for precise diagnostics, our expert team is here for you.
            We offer specialized treatment options in cancer care, cardiology,
            and orthopedics to ensure you receive the best possible care.
            Additionally, our personalized rehabilitation programs, dedicated
            mental health support, and compassionate pediatric services are
            designed to help you and your family achieve optimal health and
            well-being.
          </p>
        </div>
      </header>
      <section className="Portfoilo">
        <div className="Portfoilo-mainDiv">
          <div className="Portfoilo-left">
            <div className="portfoilo-title">
              <p>Message from the CEO</p>
            </div>
            <div className="portfoilo-text">
              <p>
                We provide top-quality medical equipment to enhance patient care
                and support healthcare professionals. Trust us for innovative
                and reliable solutions.
              </p>
            </div>
            <Link href="/contact" className="portfoilo-btn">
              <button className="px-10 bg-green-600 py-3 text-white rounded-md hover:bg-green-200 hover:text-green-900 text-lg lg:block md:block hidden">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="Portfoilo-middle">
            <div className="portfoilo-images">
              <img src="/assets/ceo.jpeg" alt="ceo" />
              <div className="portfoilo-imageshover"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="DeliveryLocations bg-[#e6f7f7] py-12">
        <div className="lg:px-14 px-6 text-center">
          <h3 className="text-[#04d15a] text-4xl p-4 space-y-4">
            Our Delivery Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "New York City, New York",
              "Grand Canyon, Arizona",
              "Yellowstone National Park, Wyoming, Montana, Idaho",
              "San Francisco, California",
              "Washington, D.C.",
              "Las Vegas, Nevada",
              "Hawaii",
              "New Orleans, Louisiana",
              "Yosemite National Park, California",
              "Miami, Florida",
              "Glacier National Park, Montana",
              "Chicago, Illinois",
              "Niagara Falls, New York",
              "Yellowstone National Park, Wyoming",
              "Acadia National Park, Maine",
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
              >
                <FaMapMarkerAlt className="text-[#04d15a] text-2xl" />
                <p className="text-gray-800 text-lg">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
