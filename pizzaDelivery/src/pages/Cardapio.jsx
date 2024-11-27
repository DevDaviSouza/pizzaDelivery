import Header from "../components/Header";
import Banner from '../assets/images/pizza.png'
import CardComida from "../components/CardComida";
import calabresa from '../assets/images/pizza calebreza.png'
import refri from '../assets/images/refri.png'
import CardBebida from "../components/CardBebida";
import { useEffect, useState } from "react";
import axios from "axios";
import { getProdutos } from "../api/UserService";
import { useNavigate } from "react-router-dom";

export default function Cardapio() {
  const [produtosList, setProdutosList] = useState([])
  const [pizzasList, setPizzasList] = useState([])
  const [bebidasList, setBebidasList] = useState([])
  
  const navigate = useNavigate()

    useEffect(() => {
        
        if (localStorage.getItem("id") == null) {
            navigate("/")
        }
    }, [])   

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getProdutos()
          setProdutosList(response.data)

          const pizzas = response.data.filter(produto =>
            produto.descricaoProduto.includes("Pizza") // Ignorando maiúsculas/minúsculas
          );
          setPizzasList(pizzas); // Atualiza o estado com os produtos filtrados

          const bebidas = response.data.filter(produto => 
            !produto.descricaoProduto.includes("Pizza"))

          setBebidasList(bebidas)
          
        } catch (error) {
          console.error('Erro ao carregar os produtos: ', error)
        }
      }

      fetchData()
  }, []) 


  return(
    <div className="overflow-hidden">
      <Header />
      <section>
        <img className="w-screen h-screen" src={Banner} alt="pizza" />
      </section>

      <section className="flex flex-col items-center py-10">
        <h1 className="font-bold text-5xl mb-12">Cardápio de pizzas</h1>
      

        <div className="grid grid-cols-3  w-9/12 place-items-center gap-y-16">
          {pizzasList.map((produto, index) => (
            <CardComida
            img={calabresa}
            info={produto}
          />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center py-10">
        <h1 className="font-bold text-5xl mb-12">Cardápio de bebidas</h1>

        <div className="grid grid-cols-3  w-9/12 place-items-center gap-y-16">
          {bebidasList.map((produto, index) => (
            <CardBebida 
            img={refri}
            info={produto}
          />
          ))}
        </div>
      </section>
    </div>
)}