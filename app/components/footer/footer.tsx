import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaSquareFacebook } from "react-icons/fa6"

export const Footer = () => {

    const year = () => {
        return new Date().getFullYear()
    }

    return (
        <div className="text-subtext border-t border-gray-100 mt-20">
            <div className="flex justify-around p-5 items-center max-md:flex-col">
                <div className="max-md:my-4">
                    <p className="border-b border-[#f8cb38] text-lg">Horario de funcionamento:</p>
                    <p className="my-2 max-md:text-center">Sábados e domingos</p>
                </div>
                <div className="max-md:flex-col max-md:my-4">
                    <p className="border-b border-[#f8cb38] text-lg text-center">Endereço: </p>
                    <p className="my-3">R. Antônio Costa Rosendo, 44 - Jardim Paulista</p>
                    <p className="text-center">São José dos Campos, SP.</p>
                </div>
                <div className="max-md:my-4">
                    <p className="border-b border-[#f8cb38] text-lg">Redes Sociais</p>
                    <ul className={`flex max-md:justify-center justify-center my-2`}>
                        <li className="p-1 cursor-pointer text-[#f8cb38] hover:text-amber-900">
                            <FaInstagram size={30} />
                        </li>
                        <li className="p-1 cursor-pointer text-[#f8cb38] hover:text-amber-900">
                            <FaSquareFacebook size={30} />
                        </li>
                        <li className="p-1 cursor-pointer text-[#f8cb38] hover:text-amber-900">
                            <FaWhatsapp size={30} />
                        </li>
                    </ul>
                </div>

            </div>
            <div className="flex flex-col bg-[#f8cb38] text-white text-center p-4">
                <p >© 2024 - {year()} Todos os Direitos Reservados <a href="/home">Assados Paulistinha</a></p>
                <p className="pt-2">Desenvolvido por <a className="underline" href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank">DM</a></p>
            </div>
        </div>
    )
}