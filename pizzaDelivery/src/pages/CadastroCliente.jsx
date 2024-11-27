import { Link, useNavigate } from "react-router-dom"
import BtnConfirmar from "../components/BtnConfirmar"
import { useState } from "react"
import { login } from "../api/UserService"
import axios from "axios"

export default function CadastroCliente() {
  const [login, setLogin] = useState()
  const [senha, setSenha] = useState()
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [cep, setCep] = useState()
  const [rua, setRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [uf, setUf] = useState()
  const [telefone, setTelefone] = useState()
  
  const navigate = useNavigate()

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post("http://localhost:8080/cliente", {
        nomeCliente: nome,
        loginCliente: login,
        senhaCliente: senha,
        emailCliente: email,
        cepCliente: cep,
        ruaCliente: rua,
        bairroCliente: bairro,
        cidadeCliente: cidade,
        ufCliente: uf,
        telefoneCliente: telefone
      })
      
      localStorage.setItem("id", resposta.data.id)

      navigate("/cardapio")
    } catch (error) {
      console.error('Erro ao fazer login: ', error)
  }}


  
  return(
    <div className=" bg-gray-300 flex justify-center items-center h-screen">
      <div className="shadow-2xl rounded-3xl bg-white w-30vw items-center flex flex-col px-14 py-7">
      <h1 className=" text-3xl font-semibold">PizzaDelivery - Login</h1>
      <h3 className="text-2xl">Cliente</h3>

      <form className="flex flex-col items-start w-full gap-y-3" onSubmit={cadastrar}>
      <label className="flex flex-col w-full" htmlFor="login">
          Nome:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setNome(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          Login:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setLogin(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          Senha:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="password" onChange={(e) => setSenha(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          Email
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          CEP:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setCep(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="senha">
          Rua:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="senha" type="text" onChange={(e) => setRua(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          Bairro:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setBairro(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          Cidade:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setCidade(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          UF:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setUf(e.target.value)}/>
        </label>

        <label className="flex flex-col w-full" htmlFor="login">
          Telefone:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" onChange={(e) => setTelefone(e.target.value)}/>
        </label>

        <div className=" w-full flex items-center justify-center">
          <BtnConfirmar />
        </div>
        

        <div className="flex w-full items-end justify-end ">
        <Link to="/"> Já tem uma conta?</Link>
        </div>
      </form>
    </div>
    </div>
  )
}