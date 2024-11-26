import { Link } from "react-router-dom"
import BtnConfirmar from "../components/BtnConfirmar"

export default function Login() {
  return(
    <div className=" bg-gray-300 flex justify-center items-center h-screen">
      <div className="shadow-2xl rounded-3xl bg-white w-30vw items-center flex flex-col p-14">
      <h1 className=" text-3xl font-semibold">PizzaDelivery - Login</h1>
      <h3 className="text-2xl">Cliente</h3>

      <form className="flex flex-col items-start w-full gap-y-6" action="">
        <label className="flex flex-col w-full" htmlFor="login">
          Login:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="login" type="text" />
        </label>
        <label className="flex flex-col w-full" htmlFor="senha">
          Senha:
          <input className="outline-none bg-gray-300 rounded-md w-full h-8" id="senha" type="password" />
        </label>

        <div className=" w-full flex items-center justify-center">
          <BtnConfirmar />
        </div>
        

        <div className="flex w-full items-end justify-end ">
        <Link to="/loginAtendente"> Atendente?</Link>
        </div>
      </form>
    </div>
    </div>
  )
}