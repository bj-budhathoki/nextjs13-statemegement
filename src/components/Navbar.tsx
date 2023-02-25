"use client";
import Link from "next/link";
import React from "react";
import { useProductCarts } from "../store";

export const Navbar = () => {
  const { items } = useProductCarts();
  return (
    <header className="fixed top-0 z-30 w-full py-1 bg-white" id="navbar">
      <div className="container flex flex-wrap items-center justify-between w-full px-6 py-3 mx-auto mt-0 ">
        <div className="order-1 md:order-2">
          <Link
            href="/"
            className="flex items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline "
          >
            <svg
              className="mr-2 text-gray-800 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"></path>
            </svg>
            SHOP-IT
          </Link>
        </div>
        <div className="flex items-center order-2 md:order-3" id="nav-content">
          <Link href="/cart" className="flex gap-1">
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"></path>
              <circle cx="10.5" cy="18.5" r="1.5"></circle>
              <circle cx="17.5" cy="18.5" r="1.5"></circle>
            </svg>
            <div>{items?.length}</div>
          </Link>
        </div>
      </div>
    </header>
  );
};
