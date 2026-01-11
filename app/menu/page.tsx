import { NavBar } from "../components/nav/nav";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const Menu = () => {
    return (
        <div>
            <NavBar />
            <div className="flex w-full items-center justify-center gap-8 mt-10 max-md:flex-col max-md:gap-2">
                <div>
                    <div className="flex items-center bg-[#b73f31] rounded-md w-sm justify-center h-20" >
                        <div className="p-6 text-white flex items-center">
                            <img className="w-16" src="/logo.jpg" alt="" />
                            <p className="p-2">Assados Paulistinha</p>
                        </div>
                    </div>
                </div>
                <div className="max-md:hidden">
                    <h1 className="text-5xl font-serif font-bold">NOSSO CARDÁPIO</h1>
                </div>
                <div>
                    <div className="flex items-center bg-[#b73f31] rounded-md w-sm justify-center h-20" >
                        <p className="p-2"><FaLocationPin size={25} color="white" /></p>
                        <div className="p-6 text-white">
                            <p>R. Antônio Costa Rosendo, 44</p>
                            <p>São José dos Campos, SP.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center bg-[#b73f31] rounded-md w-sm justify-center h-20" >
                        <p className="p-2"><FaPhone size={25} color="white" /></p>
                        <div className="p-6 text-white">
                            <p className="font-bold">Reserve Seus Pedidos</p>
                            <p>(12) 99785-6777</p>
                        </div>
                    </div>

                </div>
            </div>
            <h2 className="hidden max-md:text-center max-md:text-4xl max-md:block max-md:p-9">Nosso Cardápio</h2>
            <div className="flex justify-center items-center max-md:flex-col my-30 max-md:my-0">
                <div className=" text-center  max-md:w-full">
                    <img className="w-150 h-[400px] p-2" src="/costela.jpg" alt="" />
                    <h2 className="text-3xl p-4 font-serif">Costela ao Bafo</h2>
                    <p className="w-150 p-5 text-subtext  max-md:w-full">A costela ao bafo é preparada lentamente, garantindo carne macia e cheia de sabor.
                        Uma experiência única para quem aprecia tradição e qualidade.
                    </p>
                </div>
                <div className=" text-center  max-md:w-full">
                    <img className="w-150 h-[400px] p-2" src="/frangoAssado.jpg" alt="" />
                    <h2 className="text-3xl p-4 font-serif">Frango Assado</h2>
                    <p className="w-150 p-5 text-subtext  max-md:w-full">
                        Nosso frango assado chega no ponto certo: crocante por fora, suculento por dentro. É a medida perfeita para compartilhar e saborear sem pressa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Menu;