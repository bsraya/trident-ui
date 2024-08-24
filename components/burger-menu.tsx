"use client";
import { useState, useEffect, useRef } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Logo from "./logo";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen]);

  return (
    <nav className="w-full show lg:hidden p-5">
      <div className="flex justify-start justify-between">
        <button className="focus:outline-none text-slate-800" onClick={toggleMenu}>
          {menuOpen ? <MdClose size={24} /> : <RiMenu2Line size={24} />}
        </button>

        <a href="#" className="text-xl font-bold my-auto">白頭翁不吃小米</a>

        <span className="border border-solid border-1 rounded-full p-1">
          <Logo />
        </span>
      </div>
      <nav
        className={`${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="grid gap-5 my-10 flex justify-center text-lg cursor-pointer">
          <li className="text-[#AA6666] underline decoration-2">白頭翁不吃小米</li>
          <li className="hover:text-[#AA6666] hover:underline hover:decoration-2">白頭翁不吃小米</li>
          <li className="hover:text-[#AA6666] hover:underline hover:decoration-2">白頭翁不吃小米</li>
          <li className="hover:text-[#AA6666] hover:underline hover:decoration-2">白頭翁不吃小米</li>
        </ul>
      </nav>
    </nav>
  )
}