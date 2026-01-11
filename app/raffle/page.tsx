import { Footer } from "../components/footer/footer";
import { NavBar } from "../components/nav/nav";

const Raffle = () => {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center my-30 max-md:flex-col">
                <div>
                    <h1 className="text-6xl font-serif text-center max-md:w-full">Sorteio</h1>
                    <h2 className="text-subtext text-center tracking-widest p-2 max-md:w-full">Na compra de um pode levar dois</h2>
                    <p className="text-lg w-175 text-center p-8 max-md:w-full">Na compra de um frango assado de 2kg,
                        você participa automaticamente do nosso sorteio e pode ganhar outro frango assado igualzinho,
                        pronto para saborear.
                        Mais sabor, mais diversão, e a chance de dobrar sua refeição
                    </p>
                </div>
                <img className="w-2/4 h-1/5 max-md:w-[80%] rounded-bl-full" src="/sorteio.jpg" alt="" />
            </div>
            <Footer/>
        </div>
    )
}

export default Raffle;