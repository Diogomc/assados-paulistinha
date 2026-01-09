'use client'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="flex items-center justify-around p-2  shadow-2xl/20 max-md:flex-col w-full z-999">

            <ul className="flex items-center flex-row-reverse justify-between max-md:w-full">
                <li className="hidden max-md:block">
                    { menuOpen ? <IoMdMenu size={40} onClick={handleMenu} /> : <IoMdClose size={40} onClick={handleMenu}/>}
                </li>
                <li>Assados Paulistinha</li>
            </ul>

            <ul className={`flex p-2 max-md:flex-col text-center max-md:absolute left-0 right-0 bg-white top-10 ${menuOpen ? "max-md:hidden" : ''}`}>
                <li className="p-1">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-1">
                    <Link href="/about">Sobre</Link>
                </li>
                <li className="p-1">
                    <a href="#">Cardápio</a>
                </li>
                <li className="p-1">
                    <a href="#">Sorteios</a>
                </li>
                <li className="p-1">
                    <a href="#">Contato</a>
                </li>
            </ul>
            <ul className={`flex max-md:justify-center p-2 max-md:flex-row max-md:absolute bg-white top-52 left-0 right-0 ${menuOpen ? "max-md:hidden" : ''}`}>
                <li className="p-1 cursor-pointer text-orange-400 hover:text-amber-900">
                    <FaInstagram size={30} />
                </li>
                <li className="p-1 cursor-pointer text-orange-400 hover:text-amber-900">
                    <FaSquareFacebook size={30} />
                </li>
                <li className="p-1 cursor-pointer text-orange-400 hover:text-amber-900">
                    <FaWhatsapp size={30} />
                </li>
            </ul>
        </nav>
    )
}