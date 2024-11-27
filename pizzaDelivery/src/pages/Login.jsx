import { Link, useNavigate } from "react-router-dom"
import BtnConfirmar from "../components/BtnConfirmar"
import { useState } from "react"
import { login } from "../api/UserService"
import axios from "axios"

export default function Login() {
  const [login, setLogin] = useState()
  const [senha, setSenha] = useState()
  const [loginEfetuado, setLoginEfetuado] = useState(false)
  
  const navigate = useNavigate()

  const logar = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post("http://localhost:8080/cliente/login", {
        loginCliente: login,
        senhaCliente: senha
      })
      
      localStorage.setItem("id", resposta.data.id)

      navigate("/cardapio")
    } catch (error) {
      console.error('Erro ao fazer login: ', error)
  }}
  
  return(
    <div className=" bg-gray-300 flex justify-center items-center h-screen">
      <div className="shadow-2xl rounded-3xl bg-white w-30vw items-center flex flex-col p-14">
      <h1 className=" text-3xl font-semibold">PizzaDelivery - Login</h1>
      <h3 className="text-2xl">Cliente</h3>

      <form className="flex flex-col items-start w-full gap-y-6" onSubmit={logar}>
        <label className="flex flex-col w-full" htmlFor="login">
          Login:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setLogin(e.target.value)}/>
        </label>
        <label className="flex flex-col w-full" htmlFor="senha">
          Senha:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="senha" type="password" onChange={(e) => setSenha(e.target.value)}/>
        </label>

        <div className=" w-full flex items-center justify-center">
          <BtnConfirmar />
        </div>
        

        <div className="flex w-full items-end justify-end ">
        <Link to="/cadastro"> Ainda não possui uma conta?</Link>
        </div>
      </form>
    </div>
    </div>
  )
}