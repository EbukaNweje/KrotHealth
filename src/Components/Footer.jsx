import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center min-h-[30vh] bg-[#012f33]">
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="p-4 text-center">
          <Link href="/">
            <h3 className="lg:text-xl text-sm text-white">
              KROY<span className="text-[#04d15a]">Health</span>
            </h3>
          </Link>
        </div>
        <div className="p-4 text-left">
          <h3 className="lg:text-xl text-sm text-white">Navigate</h3>
          <ul className="text-white lg:text-base text-sm text-left">
            <li>
              <Link href="/">
                <span className="text-green-500">&#8226;</span> Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-green-500">&#8226;</span> About
              </Link>
            </li>
            <li>
              <Link href="/product">
                <span className="text-green-500">&#8226;</span> Product
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 text-left">
          <h3 className="lg:text-xl text-sm text-white">Socials</h3>
          <ul className="text-white lg:text-base text-sm text-left">
            <li>
              <span className="text-green-500">&#8226;</span> Facebook
            </li>
            <li>
              <span className="text-green-500">&#8226;</span> Instagram
            </li>
            <li>
              <span className="text-green-500">&#8226;</span> Twitter
            </li>
          </ul>
        </div>
        <div className="p-4 text-left">
          <h3 className="lg:text-xl text-sm text-white">Contacts</h3>
          <ul className="text-white lg:text-base text-sm text-left">
            <li>
              <Link href="/contact">
                <span className="text-green-500">&#8226;</span> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
