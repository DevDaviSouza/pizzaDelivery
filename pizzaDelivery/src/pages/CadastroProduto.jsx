import {FilePenLine, Trash} from "lucide-react"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { getProdutos } from "../api/UserService"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CadastroProduto() {
    const [produtosList, setProdutosList] = useState([])

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
            console.log(response.data);
            setProdutosList(response.data)
          } catch (error) {
            console.error('Erro ao carregar os produtos: ', error)
          }
        }
  
        fetchData()
        }, []) 

    return (
        <div className="flex flex-col items-center justify-center gap-7 py-7 bg-gray-100 h-screen">
            <Header />
            <h1 className="text-4xl font-bold">Produto</h1>

            <div>
                <div className="flex items-end justify-end mb-8">
                    <button className="bg-sky-400 text-white px-7 py-2 rounded-lg">Novo Produto</button>
                </div>

                <table className="flex flex-col shadow-xl rounded-2xl bg-white py-6 gap-3 h-midVh px-10">
                    <thead>
                        <tr className="flex flex-row justify-evenly items-center">  
                            <th className="w-52">Nome</th>
                            <th className="w-52">Preço</th>
                            <th className="w-52">Editar</th>
                            <th className="w-52">Excluir</th>
                        </tr>
                    </thead>

                    <tbody className="flex flex-col gap-5 ">
                        {produtosList.map((produto, index) => (
                            <tr key={index} className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">{produto.descricaoProduto}</td>
                            <td className="w-52 text-center">{produto.valorProduto}</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}