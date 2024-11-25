import banner from "./assets/images/banner.jpeg"

function App() {

  return (
    <div className="overflow-y-hidden overflow-hidden">
      <header className='z-50 text-white'>
        <nav className='flex flex-row justify-end'>
          <ul className='flex flex-row text-2xl font-semibold gap-5 mr-12 mt-2'>
            <li className=''>Home</li>
            <li>cardápio</li>
            <li>Contato</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>

      <section className='flex flex-col '>
        <div className='h-midVh w-full absolute top-0 -z-10 mb-0'>
          <img className='h-tamanhoBanner w-full object-cover' src={banner} alt="banner" />
        </div>

        <div className='flex flex-row mt-44vh h-midVh overflow-y-hidden w-full justify-between bg-gray-100 px-3 py-3'>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg">Entre em contato conosco:</h3>
            <p>End.: Rua das Pizzas - 123, Jd. Jardins</p>
            <p>Telefone: (00) 1234-5678</p>
            <p>E-mail: contato@pizzadelivery.com</p>
          </div>

          <div className="bg-gray-200">
            <form action="" className="flex flex-col">
              <label className="flex flex-col" htmlFor="nome">
                Nome 
                <input id='nome' type="text" />
              </label>
              <label className="flex flex-col" htmlFor="email">
                email
                <input type="email" id="email" />
              </label>

              <label className="flex flex-col" htmlFor="mensagem">
                mensagem
                <textarea name="mensagem" id="mensagem"></textarea>
              </label>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
