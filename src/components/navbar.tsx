"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative ">
      <div className="shadow-accertinity relative mx-auto flex max-w-4xl items-center justify-between border-neutral-200 bg-white p-4 md:mt-4 md:rounded-full">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="text-md mr-10 hidden items-center gap-2 text-neutral-500 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition duration-200 hover:text-neutral-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        {open && (
          <div className="absolute inset-x-0 top-20 mx-auto max-w-[90%] z-20">
            <div className="flex flex-col items-start gap-4 border border-neutral-200 bg-white text-neutral-400 p-2 transition duration-1000 md:hidden">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition duration-200 hover:text-neutral-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
