"use client";
import Container from "../container/index"; // Replace with your React container component
import Link from "next/link"; // Use Next.js' built-in Link component
import { useState } from "react";



const Dropdown = ({ title, children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative">
      <button
        className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && (
        <ul className="absolute bg-white border shadow-lg mt-2 rounded-lg">
          {children.map((child: any, index: any) => (
            <li key={index}>
              <Link
                href={child.path}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center my-5">
        <nav className="w-full lg:w-auto flex items-center justify-between">
          <a href="https://app.lnkr.store/" className="text-lg font-bold text-slate-800">
            .Lnkr <span className="text-slate-500">Store</span>
          </a>

        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://app.lnkr.store/"
            className="btn btn-primary mt-8 bg-black text-white py-4 px-6 rounded-xl font-bold"
          >
            Get Started
          </a>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
