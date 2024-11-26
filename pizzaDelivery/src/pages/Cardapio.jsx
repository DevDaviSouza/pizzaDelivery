import Header from "../components/Header";
import Banner from '../assets/images/pizza.png'
import CardComida from "../components/CardComida";
import calabresa from '../assets/images/pizza calebreza.png'
import refri from '../assets/images/refri.png'
import CardBebida from "../components/CardBebida";

export default function Cardapio() {
  return(
    <div className="overflow-hidden">
      <Header />
      <section>
        <img className="w-screen h-screen" src={Banner} alt="pizza" />
      </section>

      <section className="flex flex-col items-center py-10">
        <h1 className="font-bold text-5xl mb-12">Cardápio de pizzas</h1>
      

        <div className="grid grid-cols-3  w-9/12 place-items-center gap-y-16">
          <CardComida
            img={calabresa}
            titulo="teste"
            descricao="teste" 
            preco="40,00"
          />

          <CardComida
            img={calabresa}
            titulo="teste2"
            descricao="teste2" 
            preco="40,00"
          />
        </div>
      </section>

      <section className="flex flex-col items-center py-10">
        <h1 className="font-bold text-5xl mb-12">Cardápio de bebidas</h1>

        <div className="grid grid-cols-3  w-9/12 place-items-center gap-y-16">
          <CardBebida 
            img={refri}
            titulo="coca-cola"
            preco="10,00"
          />
        </div>
      </section>
    </div>
)}