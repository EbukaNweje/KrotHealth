"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenu } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const getLinkClasses = (path) => {
    return pathname === path
      ? "text-red-500 text-xl hover:text-green-500 border-b-2 border-red-500 px-4"
      : "text-[#081a1c] text-xl hover:text-green-500 px-4 ";
  };

  const getButtonClasses = (path) => {
    return pathname === path
      ? "px-10 bg-red-600 py-3 text-white rounded-md hover:bg-red-200 hover:text-red-900 text-lg lg:block md:block hidden"
      : "px-10 bg-green-600 py-3 text-white rounded-md hover:bg-green-200 hover:text-green-900 text-lg lg:block md:block hidden";
  };

  return (
    <>
      <section className="shadow-lg lg:px-20 px-4 h-20 flex justify-between items-center fixed top-0 w-full bg-white z-50 ">
        <div className="flex justify-between w-full lg:w-32 md:w-11">
          <Link href="/">
            <h3 className="lg:text-2xl text-sm text-[#081a1c]">
              KROY<span className="text-[#04d15a]">Health</span>
            </h3>
          </Link>
          <div>
            {!menu ? (
              <CgMenu
                className="lg:hidden md:hidden block"
                size={25}
                onClick={toggleMenu}
                aria-label="Open menu"
              />
            ) : (
              <AiFillCloseCircle
                className="lg:hidden md:hidden block"
                size={25}
                onClick={toggleMenu}
                aria-label="Close menu"
              />
            )}
          </div>
        </div>

        <nav className="md:hidden hidden lg:flex gap-8 lg:text-2xl text-sm">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClasses("/about")}>
            About Us
          </Link>
          <Link href="/product" className={getLinkClasses("/product")}>
            Products
          </Link>
        </nav>

        <div>
          <Link href="/contact">
            <button className={getButtonClasses("/contact")}>
              Contact
            </button>
          </Link>
        </div>
      </section>

      {menu && (
        <header className="showmenu z-40 absolute lg:hidden top-20 w-full bg-white">
          <article className="showmenu-navs space-y-4">
            <Link href="/" onClick={toggleMenu} className={getLinkClasses("/")}>
              Home
            </Link>
            <hr />
            <Link
              href="/about"
              onClick={toggleMenu}
              className={getLinkClasses("/about")}
            >
              About Us
            </Link>
            <hr />
            <Link
              href="/product"
              onClick={toggleMenu}
              className={getLinkClasses("/product")}
            >
              Products
            </Link>
            <hr />
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={getLinkClasses("/contact")}
            >
              Contact
            </Link>
          </article>
        </header>
      )}
    </>
  );
}
