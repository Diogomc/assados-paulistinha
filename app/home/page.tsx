import { Button } from "../components/button/button";
import { ButtonSecond } from "../components/button/buttonSecond";
import { Footer } from "../components/footer/footer";
import { NavBar } from "../components/nav/nav";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div>
                <img src="frango.jpg" alt="frango assado" className="w-full h-200 object-cover max-md:h-[600px]" />
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


            <div>
                <div className="flex justify-center items-center my-50 max-md:flex-col max-md:my-20">
                    <img className=" h-120 object-contain" src="frangoembalado.jpg " alt="" />
                    <div className="max-md:mt-16 flex flex-col items-center">
                        <h2 className="text-5xl text-center font-serif">O Peso Certo do Sabor</h2>
                        <p className="p-8 text-subtext text-center w-180 text-lg font-sans max-md:w-full">
                            Nosso frango assado tem aproximadamente 2kg: equilíbrio perfeito entre qualidade e quantidade.
                            Ideal para seu almoço ficar no ponto certo, com crocância e com muito sabor.
                        </p>
                        <Button name="Cardápio"/>
                    </div>
                </div>
            </div>


            <div className="my-10 w-full">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-5xl py-5 font-serif">Conheça-nos</h2>
                    <iframe
                        className="w-2/4 h-96 max-md:w-full p-2 rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4353894570336!2d-45.877912599999995!3d-23.1907984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a470ab4f0b5%3A0x3e7cde4c927fc9e3!2sR.%20Ant%C3%B4nio%20Costa%20Rosendo%2C%2044%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012216-060!5e0!3m2!1spt-BR!2sbr!4v1768159762202!5m2!1spt-BR!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p className="text-subtext text-center p-6 m-3 w-6xl text-lg font-sans max-md:w-full">
                        Assados Paulistinha está situada em um ponto estratégico de São José dos Campos,
                        oferecendo fácil acesso para moradores e visitantes da região.
                        Localizada na Rua Antônio Costa Rosendo, nº 44, no bairro Jardim Paulista.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;