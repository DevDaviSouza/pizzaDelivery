import banner from "../assets/images/banner.jpeg"
import Header from "../components/Header"

function Opinioes() {

  return (
    <div className="overflow-hidden overflow-y-hidden"> 
      <Header />
      <section className='flex flex-col '>
        <div className=' w-full h-midVh absolute top-0 z-10 mb-0'>
          <img className='w-full h-full size-fit block object-cover bg-cover' src={banner} alt="banner" />
        </div>
        
        <div className="bg-white">
         
          <div className='flex flex-row mt-midVh h-midVh overflow-y-hidden w-full justify-between bg-gray-100 px-3 '>
            <div className="flex flex-col gap-1 my-5">
              <h3 className="font-bold text-lg">Entre em contato conosco:</h3>
              <p>End.: Rua das Pizzas - 123, Jd. Jardins</p>
              <p>Telefone: (00) 1234-5678</p>
              <p>E-mail: contato@pizzadelivery.com</p>
            </div>
            
            <div className="bg-gray-200 p-7 w-30vw my-5  rounded-2xl">
              <form action="" className="flex flex-col gap-5 justify-center h-full">
                <h1 className="text-2xl font-bold">Opinião</h1>
                <label className="flex flex-col" htmlFor="nome">
                  Nome 
                  <input id='nome' type="text" className="rounded-lg outline-none"/>
                </label>
                <label className="flex flex-col" htmlFor="email">
                  email
                  <input type="email" id="email" className="rounded-lg outline-none"/>
                </label>

                <label className="flex flex-col" htmlFor="mensagem">
                  mensagem
                  <textarea name="mensagem" id="mensagem" className="rounded-lg outline-none h-28" ></textarea>
                </label>

                <button type="submit" className="bg-sky-600 w-20 rounded-md">Enviar</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Opinioes
