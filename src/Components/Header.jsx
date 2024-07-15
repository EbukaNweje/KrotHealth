"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenu } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Header() {
  const pathname = usePathname();


  const getLinkClasses = (path) => {
    return pathname === path
      ? "text-red-500 lg:text-xl md:text-sm text-sm hover:text-green-500 border-b-2 border-red-500 px-2"
      : "lg:text-[#081a1c] hover:text-green-500 px-2 lg:text-xl md:text-sm text-sm ";
  };

  const getButtonClasses = (path) => {
    return pathname === path
      ? "lg:px-10 md:px-4 px-2 bg-red-600 py-3 text-white rounded-md hover:bg-red-200 hover:text-red-900 text-lg md:text-sm text-xs  "
      : "lg:px-10 md:px-4 px-2 bg-green-600 py-3 text-white rounded-md hover:bg-green-200 hover:text-green-900 text-lg md:text-sm text-xs";
  };

  return (
    <>
      <section className="shadow-lg lg:px-20  md:px-10 px-2 h-20 flex justify-between items-center fixed top-0 w-full bg-white z-50 ">
        <article className="">
          <Link href="/">
            <h3 className="lg:text-2xl md:text-sm text-xs text-[#081a1c]">
              KROY<span className="text-[#04d15a]">Health</span>
            </h3>
          </Link>
        </article>

        <nav className="flex lg:gap-8 md:gap-4 gap-1">
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
        <article>
          <Link href="/contact">
            <button className={getButtonClasses("/contact")}>
              Contact
            </button>
          </Link>
        </article>
      </section>

    </>
  );
}
