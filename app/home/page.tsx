import { Button } from "../components/button/button";
import { ButtonSecond } from "../components/button/buttonSecond";
import { Footer } from "../components/footer/footer";
import { NavBar } from "../components/nav/nav";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div>
                <img src="frango.jpg" alt="frango assado"
                    className="w-full h-[800px] object-cover"
                />
            </div>
            <div className="absolute top-[30%] left-50 max-md:left-0 max-md:w-full max-md:p-2">
                <h1 className="text-6xl w-lg font-serif text-white max-md:text-4xl max-md:max-w-full ">CROCANTE POR FORA,</h1>
                <h1 className="text-6xl w-lg  font-serif text-white max-md:text-4xl max-md:max-w-full">SUCULENTO POR DENTRO</h1>
                <p className="text-neutral-200 text-lg py-4 max-md:text-sm">Venha conhecer os melhores assados da região</p>
                <ul className="flex">
                    <li className="mx-1"><Button name="Fale Conosco" /></li>
                    <li className="mx-1"><Button name="Cardápio" /></li>
                </ul>
            </div>
            <div className="max-md:w-full">
                <p className="text-center mt-10 py-3 text-lg tracking-widest text-subtext font-thin">Assados</p>
                <h2 className="font-serif text-5xl text-center ">Assados Paulistinha</h2>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-subtext text-center p-6 m-3 w-6xl text-lg font-sans max-md:w-full"> No Assados Paulistinha,
                        cada assado é preparado com dedicação e tempero especial que conquista paladares.
                        Trabalhamos sempre com ingredientes frescos, assados no ponto certo para garantir crocância por fora e suculência por dentro.
                        Aqui você encontra sabor caseiro, qualidade de confiança e aquele toque que transforma qualquer refeição em um momento especial.
                    </p>
                    <p className="font-bold text-subtext"> | Retirada no Local |</p>
                    <ul className="flex py-5 my-4"> 
                        <li className="mx-1"><Button name="Conheça-nos" /></li>
                        <li className="mx-1"><ButtonSecond name="Entrar em contato" /></li>

                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;