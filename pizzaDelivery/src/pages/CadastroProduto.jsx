import {FilePenLine, Trash} from "lucide-react"

export default function CadastroProduto() {
    return (
        <div className="flex flex-col items-center justify-center gap-7 py-7 bg-gray-100 h-screen">
            <h1 className="text-4xl font-bold">Produto</h1>

            <div>
                <div className="flex items-end justify-end mb-8">
                    <button className="bg-sky-400 text-white px-7 py-2 rounded-lg">Novo Produto</button>
                </div>

                <table className="flex flex-col shadow-xl rounded-2xl bg-white py-6 gap-3">
                    <thead>
                        <tr className="flex flex-row justify-evenly items-center">
                            <th className="w-52">ID</th>
                            <th className="w-52">Nome</th>
                            <th className="w-52">Descrição</th>
                            <th className="w-52">Preço</th>
                            <th className="w-52">Editar</th>
                            <th className="w-52">Excluir</th>
                        </tr>
                    </thead>

                    <tbody className="flex flex-col gap-5 ">
                        <tr className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">1</td>
                            <td className="w-52 text-center">Pizza de calabresa</td>
                            <td className="w-52 text-center">Pizza de calabresa </td>
                            <td className="w-52 text-center">50.00</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>

                        <tr className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">1</td>
                            <td className="w-52 text-center">Pizza de calabresa</td>
                            <td className="w-52 text-center">Pizza de calabresa </td>
                            <td className="w-52 text-center">50.00</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>

                        <tr className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">1</td>
                            <td className="w-52 text-center">Pizza de calabresa</td>
                            <td className="w-52 text-center">Pizza de calabresa </td>
                            <td className="w-52 text-center">50.00</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>

                        <tr className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">1</td>
                            <td className="w-52 text-center">Pizza de calabresa</td>
                            <td className="w-52 text-center">Pizza de calabresa </td>
                            <td className="w-52 text-center">50.00</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>

                        <tr className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">1</td>
                            <td className="w-52 text-center">Pizza de calabresa</td>
                            <td className="w-52 text-center">Pizza de calabresa </td>
                            <td className="w-52 text-center">50.00</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>

                        <tr className="flex flex-row justify-evenly w-full items-center">
                            <td className="w-52 text-center">1</td>
                            <td className="w-52 text-center">Pizza de calabresa</td>
                            <td className="w-52 text-center">Pizza de calabresa </td>
                            <td className="w-52 text-center">50.00</td>
                            <button className="w-52 text-center flex items-center justify-center"><FilePenLine /></button>
                            <button className="w-52 text-center flex items-center justify-center"><Trash /></button>
                        </tr>

                        
                    </tbody>
                </table>
            </div>
            <div></div>
        </div>
    )
}