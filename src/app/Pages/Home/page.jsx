"use client";
import Link from "next/link";
import Image from "next/image";
import "@/app/Pages/Home/Home.css";
import {
  FaRegHeart,
  FaRegSmile,
  FaRegStar,
  FaRegClipboard,
} from "react-icons/fa";

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

const blogData = [
  {
    id: 1,
    name: "Portable X-ray Machines",
    description:
      "State-of-the-art portable X-ray machines for accurate diagnostics on the go.",
    imageUrl: "/assets/x-ray.jpg",
  },
  {
    id: 2,
    name: "Microscopes",
    description:
      "High-resolution microscopes for precise and detailed examination.",
    imageUrl: "/assets/microscopes.jpeg",
  },
  {
    id: 3,
    name: "Ultrasound Machines",
    description: "Advanced ultrasound machines for clear and accurate imaging.",
    imageUrl: "/assets/ultra-scan.jpeg",
  },
  {
    id: 4,
    name: "MRI Scanners",
    description:
      "High-performance MRI scanners for detailed and accurate scans.",
    imageUrl: "/assets/mri-scaner.jpg",
  },
  {
    id: 5,
    name: "CT Scanners",
    description: "Cutting-edge CT scanners for fast and accurate imaging.",
    imageUrl: "/assets/ct-scaner.webp",
  },
  {
    id: 6,
    name: "Patient Monitors",
    description:
      "Reliable patient monitors for continuous vital signs tracking.",
    imageUrl: "/assets/p-m.jpeg",
  },
  {
    id: 7,
    name: "ECG Machines",
    description: "High-precision ECG machines for accurate heart monitoring.",
    imageUrl: "/assets/ECG-v.webp",
  },
  {
    id: 8,
    name: "Defibrillators",
    description: "Top-quality defibrillators for emergency cardiac care.",
    imageUrl: "/assets/Defibrillators.jpeg",
  },
  {
    id: 9,
    name: "Ventilators",
    description: "Advanced ventilators for critical respiratory support.",
    imageUrl: "/assets/Ventilators.jpg",
  },
  {
    id: 10,
    name: "Infusion Pumps",
    description: "Reliable infusion pumps for precise medication delivery.",
    imageUrl: "/assets/Infusion-Pumps.jpg",
  },
  {
    id: 11,
    name: "Anesthesia Machines",
    description:
      "State-of-the-art anesthesia machines for safe and effective anesthesia delivery.",
    imageUrl: "/assets/a-m.jpeg",
  },
  {
    id: 12,
    name: "Surgical Instruments",
    description:
      "High-quality surgical instruments for precise surgical procedures.",
    imageUrl: "/assets/Surgical-Instruments.webp",
  },
  {
    id: 13,
    name: "Dialysis Machines",
    description: "Advanced dialysis machines for effective renal care.",
    imageUrl: "/assets/Dialysis-Machines.jpg",
  },
  {
    id: 14,
    name: "Oxygen Concentrators",
    description:
      "Reliable oxygen concentrators for supplemental oxygen therapy.",
    imageUrl: "/assets/Oxygen-Concentrators.jpeg",
  },
  {
    id: 15,
    name: "Syringe Pumps",
    description: "High-precision syringe pumps for accurate drug delivery.",
    imageUrl: "/assets/Syringe-Pumps.webp",
  },
  {
    id: 16,
    name: "Patient Warmers",
    description: "Efficient patient warmers for maintaining body temperature.",
    imageUrl: "/assets/Patient-Warmers.jpeg",
  },
  {
    id: 17,
    name: "Nebulizers",
    description: "Effective nebulizers for respiratory treatment.",
    imageUrl: "/assets/download.jpeg",
  },
  {
    id: 18,
    name: "Blood Pressure Monitors",
    description: "Accurate blood pressure monitors for precise measurement.",
    imageUrl: "/assets/BloodPressureMonitors.jpeg",
  },
  {
    id: 19,
    name: "Thermometers",
    description: "Reliable thermometers for accurate temperature measurement.",
    imageUrl: "/assets/Thermometers.jpeg",
  },
  {
    id: 20,
    name: "Glucometers",
    description: "High-precision glucometers for blood glucose monitoring.",
    imageUrl: "/assets/Glucometers.jpeg",
  },
  {
    id: 21,
    name: "Pulse Oximeters",
    description: "Reliable pulse oximeters for oxygen saturation monitoring.",
    imageUrl: "/assets/Pulse-Oximeters.jpeg",
  },
  {
    id: 22,
    name: "Stethoscopes",
    description: "High-quality stethoscopes for accurate auscultation.",
    imageUrl: "/assets/Stethoscopes.jpeg",
  },
  {
    id: 23,
    name: "Medical Lights",
    description:
      "Efficient medical lights for surgical and diagnostic procedures.",
    imageUrl: "/assets/Medical-Lightss.jpeg",
  },
  {
    id: 24,
    name: "Sterilizers",
    description: "Advanced sterilizers for effective infection control.",
    imageUrl: "/assets/Sterilizers.jpeg",
  },
  {
    id: 25,
    name: "Dental Equipment",
    description: "Comprehensive dental equipment for professional dental care.",
    imageUrl: "/assets/Dental-Equipment.jpeg",
  },
  {
    id: 26,
    name: "Medical Furniture",
    description: "Durable medical furniture for healthcare settings.",
    imageUrl: "/assets/Medical-Furniture.jpeg",
  },
  {
    id: 27,
    name: "Medical Cabinets",
    description: "Efficient medical cabinets for organized storage.",
    imageUrl: "/assets/Medical-Cabinets.jpeg",
  },
  {
    id: 28,
    name: "Medical Carts",
    description: "Versatile medical carts for easy transportation.",
    imageUrl: "/assets/Medical-Carts.jpeg",
  },
  {
    id: 29,
    name: "Hospital Beds",
    description: "Comfortable hospital beds for patient care.",
    imageUrl: "/assets/hospital-bed.jpg",
  },
  {
    id: 30,
    name: "Wheelchairs",
    description: "Durable wheelchairs for patient mobility.",
    imageUrl: "/assets/wheelchair.webp",
  },
  {
    id: 31,
    name: "Stretchers",
    description: "Reliable stretchers for patient transport.",
    imageUrl: "/assets/Stretchers.jpeg",
  },
  {
    id: 32,
    name: "Medical Scales",
    description: "Accurate medical scales for weight measurement.",
    imageUrl: "/assets/Medical-Scales.jpeg",
  },
  {
    id: 33,
    name: "Medical Refrigerators",
    description: "Efficient medical refrigerators for safe storage.",
    imageUrl: "/assets/Medical-Refrigerators.jpeg",
  },
  {
    id: 34,
    name: "Medical Freezers",
    description: "Reliable medical freezers for temperature-sensitive storage.",
    imageUrl: "/assets/Medical-Freezers.jpeg",
  },
  {
    id: 35,
    name: "IV Stands",
    description: "Sturdy IV stands for intravenous therapy.",
    imageUrl: "/assets/ivstands.jpg",
  },
  {
    id: 36,
    name: "Medical Trolleys",
    description: "Versatile medical trolleys for efficient workflow.",
    imageUrl: "/assets/Medical-Trolleys.jpeg",
  },
  {
    id: 37,
    name: "Surgical Tables",
    description: "High-quality surgical tables for operative procedures.",
    imageUrl: "/assets/Surgical-Tables.jpg",
  },
  {
    id: 38,
    name: "Examination Tables",
    description: "Comfortable examination tables for patient assessment.",
    imageUrl: "/assets/Examination-Tables.jpeg",
  },
  {
    id: 39,
    name: "Medical Lights",
    description: "Advanced medical lights for diagnostic clarity.",
    imageUrl: "/assets/Medical-Lights.jpeg",
  },
  {
    id: 40,
    name: "Autoclaves",
    description: "High-performance autoclaves for sterilization.",
    imageUrl: "/assets/Autoclaves.jpeg",
  },
  {
    id: 41,
    name: "Medical Waste Bins",
    description: "Safe disposal of medical waste with reliable bins.",
    imageUrl: "/assets/Medical-Bins.jpeg",
  },
  {
    id: 42,
    name: "Diagnostic Kits",
    description: "Comprehensive diagnostic kits for accurate testing.",
    imageUrl: "/assets/Diagnostic-Kit.jpeg",
  },
  {
    id: 43,
    name: "Medical Masks",
    description: "High-quality medical masks for protection.",
    imageUrl: "/assets/surgiical-mask.jpg",
  },
  {
    id: 44,
    name: "Surgical Gloves",
    description: "Sterile surgical gloves for safe procedures.",
    imageUrl: "/assets/Surgical-Gloves.jpeg",
  },
  {
    id: 45,
    name: "Medical Gowns",
    description: "Protective medical gowns for hygiene.",
    imageUrl: "/assets/surgical-gown.jpg",
  },
  {
    id: 46,
    name: "Medical Drapes",
    description: "Sterile medical drapes for operative fields.",
    imageUrl: "/assets/Medical-Drapes.jpeg",
  },
  {
    id: 47,
    name: "Medical Bandages",
    description: "High-quality medical bandages for wound care.",
    imageUrl: "/assets/Medical-Bandages.jpeg",
  },
  {
    id: 48,
    name: "Medical Tape",
    description: "Reliable medical tape for secure bandaging.",
    imageUrl: "/assets/Medical-Tapes.jpeg",
  },
  {
    id: 49,
    name: "Medical Gauze",
    description: "Sterile medical gauze for wound dressing.",
    imageUrl: "/assets/Medical-Gauze.jpeg",
  },
  {
    id: 50,
    name: "First Aid Kits",
    description: "Comprehensive first aid kits for emergency care.",
    imageUrl: "/assets/FirstAidKits.jpeg",
  },
];

export default function LandinPage() {
  return (
    <div className="Home bg-[#f4fcfc]">
      <div className="Hero-Part bg-[#04d15a]">
        <div className="Hero-Partwrapper">
          <div className="Hero-PartContent">
            <div className="lg:text-4xl text-lg lg:text-left text-center font-bold">
              <h1>Your Health, Our Priority with Instant Insights</h1>
            </div>
            <ul className="space-y-2 list-disc px-8">
              <li>Medical treatments with innovative health machines.</li>
              <li>Personalized care with advanced health technology.</li>
              <li>Cutting-edge treatments and health monitoring devices.</li>
              <li>Exceptional care and home health solutions.</li>
            </ul>
            <div className="btn">
              <div className="btn1">
                <Link href="/product" className="nav-active text-white">
                  View Products
                </Link>
              </div>
              <div className="btn2">
                <Link href="/contact" className="nav-active">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="Hero-PartContents">
            <Image
              src="/assets/hero.png"
              alt="Home Image"
              className="w-[85%] h-[94%] mt-10"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
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
          Discover the difference our hospital&apos;s medical equipment can make
          in your healthcare experience. We offer a wide range of high-quality
          hospital&apos;s equipment designed to meet the needs of both medical
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
      <div>
        <section className="worker mt-20 flex flex-col">
          <div className="Service-titlewhat p-8">
            <h3 className="lg:text-3xl text-lg text-green-500 text-center">
              Products
            </h3>
          </div>
          <section className="worker-wrapper p-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
            {blogData.map((image) => (
              <article
                className="worker-boxes rounded-md hover:shadow-lg hover:border-b hover:border-emerald-700 shadow-md"
                key={image.id}
              >
                <div className="worker-image">
                  <Image
                    src={image.imageUrl}
                    alt={image.name}
                    className="rounded-md"
                    width={500}
                    height={500}
                  />
                  <div className="worker-imagehover"></div>
                </div>
                <div className="worker-text p-4">
                  <h1>{image?.name}</h1>
                  <p>{image?.description}</p>
                </div>
              </article>
            ))}
          </section>
        </section>
      </div>
    </section>
    </div>
  );
}
