"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenu } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const getLinkClasses = (path) => {
    return pathname === path
      ? "text-red-500 text-xl hover:text-green-500 border-b-2 border-red-500"
      : "text-[#081a1c] text-xl hover:text-green-500";
  };

  const getButtonClasses = (path) => {
    return pathname === path
      ? "px-10 bg-red-600 py-3 text-white rounded-md hover:bg-red-200 hover:text-red-900 text-lg lg:block md:block hidden"
      : "px-10 bg-green-600 py-3 text-white rounded-md hover:bg-green-200 hover:text-green-900 text-lg lg:block md:block hidden";
  };

  return (
    <div className="header head">
      <section className="header-section shadow-lg lg:px-20 px-4">
        <article className="flex justify-between w-full lg:w-32 md:w-11">
          <Link href="/">
            <h3 className="lg:text-2xl text-sm text-[#081a1c]">
              KROY<span className="text-[#04d15a]">Health</span>
            </h3>
          </Link>
          <div>
            {!menu ? (
              <CgMenu
                className="lg:hidden md:hidden flex"
                size={25}
                onClick={toggleMenu}
                aria-label="Open menu"
              />
            ) : (
              <AiFillCloseCircle
                className="lg:hidden md:hidden flex"
                size={25}
                onClick={toggleMenu}
                aria-label="Close menu"
              />
            )}
          </div>
        </article>

        <article className="header-navs md:hidden lg:text-2xl text-sm">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClasses("/about")}>
            About Us
          </Link>
          <Link href="/product" className={getLinkClasses("/product")}>
            Products
          </Link>
        </article>
        <article>
          <Link href="/contact">
            <button className={getButtonClasses("/contact")}>
              Contact
            </button>
          </Link>
        </article>
      </section>

      {menu && (
        <header className="showmenu -mt-3 z-40">
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
    </div>
  );
}
