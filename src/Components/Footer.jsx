import Link from "next/link";

const Footer = () => {
  return (
    <footer class="flex items-center justify-center min-h-[30vh] bg-[#012f33]">
      <div class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class=" p-4 text-center">
        <Link href="/" > <h3 className="lg:text-xl text-sm text-white">
            KROY<span className="text-[#04d15a]">Health</span>
          </h3></Link>
        </div>
        <div class=" p-4 text-left">
          <h3 className="lg:text-xl text-sm text-white">Navigate</h3>
          <ul className=" text-white lg:text-base text-sm text-left ">
          <Link href="/">  <li className="">
              <span className="text-green-500">&#8226;</span> Home
              </li> </Link>
              <Link href="/about">  <li className="">
              <span className="text-green-500">&#8226;</span> About
            </li> </Link>
            <Link href="/product"> <li className="">
              <span className="text-green-500">&#8226;</span> Product
            </li> </Link>
          </ul>
        </div>
        <div class=" p-4 text-left">
          <h3 className="lg:text-xl text-sm text-white">Socials</h3>
          <ul className=" text-white lg:text-basetext-sm text-left">
            <li className="">
              <span className="text-green-500">&#8226;</span> Facebook
            </li>
            <li className="">
              <span className="text-green-500">&#8226;</span> Instagram
            </li>
            <li className="">
              <span className="text-green-500">&#8226;</span> Twitter
            </li>
          </ul>
        </div>
        <div class=" p-4 text-left">
          <h3 className="lg:text-xl text-sm text-white">Contacts</h3>
          <ul className=" text-white lg:text-base text-sm text-left">
          <Link href="/contact">    <li className="">
              <span className="text-green-500">&#8226;</span> Contact Us
            </li></Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
