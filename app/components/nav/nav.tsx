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
        <nav className="flex items-center justify-around p-2 bg-[#f8cb38] shadow-2xl/20 max-md:flex-col w-full z-999">

            <ul className="flex items-center flex-row-reverse justify-between max-md:w-full">
                <li className="hidden max-md:block">
                    { menuOpen ? <IoMdMenu size={40} onClick={handleMenu} /> : <IoMdClose size={40} onClick={handleMenu}/>}
                </li>
                <li><img className="w-14" src="/logo.jpg" alt="" /></li>
            </ul>

            <ul className={`flex p-2 max-md:flex-col text-center max-md:absolute 
                left-0 right-0 text-white bg-[#f8cb38] top-18 z-999 ${menuOpen ? "max-md:hidden" : ''}`}>
                <li className="p-1 max-md:p-5">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-1 max-md:p-5">
                    <a href="/menu">Cardápio</a>
                </li>
                <li className="p-1 max-md:p-5">
                    <a href="#">Sorteios</a>
                </li>
                <li className="p-1 max-md:p-5">
                    <a href="#">Contato</a>
                </li>
            </ul>
            <ul className={`flex max-md:justify-center p-2 max-md:flex-row max-md:absolute bg-[#f8cb38] top-85 z-999 left-0 right-0 ${menuOpen ? "max-md:hidden" : ''}`}>
                <li className="p-1 cursor-pointer text-white hover:text-amber-900 max-md:py-5">
                    <FaInstagram size={30} />
                </li>
                <li className="p-1 cursor-pointer text-white hover:text-amber-900 max-md:py-5">
                    <FaSquareFacebook size={30} />
                </li>
                <li className="p-1 cursor-pointer text-white hover:text-amber-900 max-md:py-5">
                    <FaWhatsapp size={30} />
                </li>
            </ul>
        </nav>
    )
}