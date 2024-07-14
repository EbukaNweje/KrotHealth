"use client";
import Link from "next/link";
import Image from "next/image";
import "./Home.css";
import { Achivment } from "./Achivment/page";

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
                <Link href="/product" className="nav-active">
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
              className="w-[85%] h-full mt-10"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <Achivment />
    </div>
  );
}
