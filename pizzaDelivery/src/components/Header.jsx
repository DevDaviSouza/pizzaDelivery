import {ShoppingCart} from "lucide-react"
import { Link } from "react-router-dom"
export default function Header() {
  
  const logout = () => {
    localStorage.removeItem("id")
  }
  
  return(
    <>
      <header className='flex flex-col z-50 black bg-opacity-60 bg-slate-200 absolute w-full py-2 top-0 px-6'>
        <nav className='flex flex-row justify-end items-center mr-8'>
          <ul className='flex flex-row text-2xl font-semibold gap-5  items-center justify-center'>
            <li><Link to="/cardapio">cardápio</Link></li>
            <li><Link to="/contato">contato</Link></li>
            <li><Link to="/" onClick={logout}>Logout</Link></li>
            <li><Link to="/PedidosCliente">Pedidos</Link></li>
            <li> <Link to="/carrinho"><ShoppingCart /> </Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}