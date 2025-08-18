import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const linkLiClass =
    router.pathname === "/"
      ? "md:text-white px-2 text-black hover:text-[#2C5F3E] hover:md:text-gray-300"
      : "hover:text-[#2C5F3E] px-2";
  return (
    <div
      className={`h-[5rem] w-full bg-transparent flex flex-row items-center justify-between x-spacing ${
        router.pathname === "/" ? "absolute" : ""
      }`}
    >
      <span className="logo">
        <Link href="/">
          <img
            style={{ height: 100, cursor: "pointer" }}
            src="/urbanik-logo.png"
            alt="logo"
          />
        </Link>
      </span>
      <div>
        <ul className="flex">
          <li className={linkLiClass}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={linkLiClass}>
            <Link href="/shop/all">Shop</Link>
          </li>
          <li className={linkLiClass}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
