import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardBebida(props) {
  // Carrega os itens do localStorage no estado inicial
  let items = JSON.parse(localStorage.getItem("db")) || [];

  // Função para salvar um item no localStorage
  const salvarItem = () => {
    // Cria o novo item
    const novoItem = {
      id: props.info.id,
      qtdItens: 1,
      descricaoProduto: props.info.descricaoProduto,
      valorProduto: props.info.valorProduto,
    };

    // Adiciona o novo item à lista
    items.push(novoItem);

    // Atualiza o localStorage com a lista atualizada
    localStorage.setItem("db", JSON.stringify(items));
  };

  return (
    <Link
      to={{ pathname: "/carrinho", state: props }}
      className="flex flex-col rounded-xl shadow-md border w-20vw justify-start items-start"
    >
      <img
        className="w-full h-64 rounded-t-xl"
        src={props.img}
        alt=""
      />
      <div className="flex flex-col gap-2 p-3">
        <h3 className="text-xl font-bold">{props.info.descricaoProduto}</h3>
        <span className="font-bold">R$ {props.info.valorProduto}</span>
        <button
          className="border w-48 h-9 text-white bg-sky-600 rounded-lg"
          onClick={salvarItem}
        >
          Adicionar ao pedido
        </button>
      </div>
    </Link>
  );
}
