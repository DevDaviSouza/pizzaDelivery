import { useNavigate } from "react-router-dom";
import { FilePenLine, Trash } from "lucide-react";
import Header from "../components/Header";
import BtnConfirmar from "../components/BtnConfirmar";
import { useEffect, useState } from "react";
import { novoPedido, novoItemPedido } from "../api/UserService";
import axios from "axios";

export default function Carrinho() {
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);
  const [idPedido, setIdPedido] = useState();
  const [count, setCount] = useState(1)

  
  useEffect(() => {

    if (localStorage.getItem("id") == null) {
      navigate("/");
      return;
    }
    
    const storedItems = JSON.parse(localStorage.getItem("db")) || [];
    setItens(storedItems);
  }, [itens]);

  const excluirItem = (index) => {
    const updatedItems = itens.filter((_, i) => i !== index);
    localStorage.setItem("db", JSON.stringify(updatedItems));
    setItens(updatedItems);
  };

  const atualizarQuantidade = (index, qtd) => {
    const updatedItems = [...itens];
    updatedItems[index].qtdItens = qtd;
    localStorage.setItem("db", JSON.stringify(updatedItems));
    setItens(updatedItems);
  };

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.valorProduto * item.qtdItens, 0).toFixed(2);
  };

  const confirmarCompra = async () => {
    try {
      const id = localStorage.getItem("id"); // ID do cliente
      const storedItems = JSON.parse(localStorage.getItem("db")) || []; // Itens do carrinho
  
      // Criar um novo pedido
      const response = await axios.post(`http://localhost:8080/pedidos/${id}`, {
        numeroPedido: count,
        dataPedido: new Date(),
        status: "6e0d3768-141b-49e4-8807-f03f1b808bd9" // Substitua pelo UUID correto do status
      });

      setCount((prevCount) => prevCount + 1);
      
      const novoIdPedido = response.data.id;
      setIdPedido(novoIdPedido) // ID do pedido criado
      console.log(novoIdPedido);
      

      for (const item of storedItems) {
        console.log(item.id)
        await axios.post(`http://localhost:8080/itens-pedidos/${novoIdPedido}`, {
          idProduto: item.id, 
          qtdItens: Number(item.qtdItens)
        });
      }
      
      alert("compra realizada com sucesso")

      localStorage.removeItem("db");
    } catch (error) {
      if (error.response) {
        console.error("Erro no servidor:", error.response.data);
      } else if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
      } else {
        console.error("Erro geral:", error.message);
      }
    }
  };
  
  

  return (
    <div className="flex flex-col items-center pt-20 gap-7 py-7 bg-gray-100 h-screen">
      <Header />
      <h1 className="text-4xl font-bold">Carrinho</h1>

      <div className="flex flex-row gap-16">
        <table className="flex flex-col shadow-xl rounded-2xl bg-white py-6 gap-3 max-h-midVh px-10">
          <thead>
            <tr className="flex flex-row justify-evenly items-center">
              <th className="w-52">Nome</th>
              <th className="w-52">Preço</th>
              <th className="w-52">Quantidade</th>
              <th className="w-52">Excluir</th>
            </tr>
          </thead>

          <tbody className="flex flex-col gap-5">
            {itens.map((item, index) => (
              <tr key={index} className="flex flex-row justify-evenly w-full items-center">
                <td className="w-52 text-center">{item.descricaoProduto}</td>
                <td className="w-52 text-center">R$ {item.valorProduto.toFixed(2)}</td>
                <td className="w-52 text-center">
                  <input
                    type="number"
                    className="outline-none border text-center w-52"
                    value={item.qtdItens}
                    onChange={(e) => atualizarQuantidade(index, parseInt(e.target.value))}
                  />
                </td>
                <td className="w-52 text-center">
                  <button
                    className="w-52 text-center flex items-center justify-center"
                    onClick={() => excluirItem(index)}
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col shadow-xl rounded-2xl bg-white py-6 gap-3 max-h-32 px-10">
          <h3>Valor total: R$<span>{calcularTotal()}</span></h3>
          <BtnConfirmar onClick={confirmarCompra}/>
        </div>
      </div>
    </div>
  );
}
