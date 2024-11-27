import {FilePenLine, Trash} from "lucide-react"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { pedidosCliente } from "../api/UserService"

export default function PedidosCliente() {
    const [pedidos, setPedidos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        
        if (localStorage.getItem("id") == null) {
            navigate("/")
        }
    }, [])  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          let id = localStorage.getItem("id")
          const response = await pedidosCliente(id)
          console.log(response.data);
          setPedidos(response.data)
        } catch (error) {
          console.error('Erro ao carregar os produtos: ', error)
        }
      }

      fetchData()
    }, [])
    
    return (
        <div className="flex flex-col items-center justify-center py-7 bg-gray-100 h-screen">
            <Header />
            <h1 className="text-4xl font-bold mt-4">Pedidos</h1>

            <div>
                <div className="flex items-end justify-end mb-8">
                </div>

                <table className="flex flex-col items-center shadow-xl rounded-2xl bg-white py-6 gap-3 h-midVh overflow-y-hidden">
                    <thead className="">
                        <tr className="flex flex-row justify-evenly items-center">
                        <th className="w-52">Número</th>
                            <th className="w-52">Status</th>
                            <th className="w-52">Data</th>
                        </tr>
                    </thead>

                    <tbody className="flex flex-col gap-5 ">
                        {pedidos.map((pedido, index) => (
                          <tr key={index} className="flex flex-row justify-evenly w-full items-center">
                          <td className="w-52 text-center">{pedido.numeroPedido}</td>
                          <td className="w-52 text-center">{pedido.status.status}</td>
                          <td className="w-52 text-center">{new Date(pedido.dataPedido).toLocaleString()}</td>
                      </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
            <div></div>
        </div>
    )
}