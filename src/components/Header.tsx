"use client";

import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/types/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-slate-50/70 backdrop-blur-sm shadow-sm z-50">
            <div className="container mx-auto px-8 p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-slate-800">
                    <Image
                        src="/images/banner_t.png"
                        alt="Miakks"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-slate-800"
                    aria-expanded={isMenuOpen}
                    aria-controls="main-nav"
                >
                    {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                </button>
                <nav
                    id="main-nav"
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white/95 md:bg-transparent md:backdrop-blur-none`}
                >
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-right text-slate-400 hover:text-slate-800 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
