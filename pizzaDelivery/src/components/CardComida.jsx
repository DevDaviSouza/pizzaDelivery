

export default function CardComida(props) {
  return(
    <div className='flex flex-col rounded-xl shadow-md border w-20vw  justify-start items-start'>
      <img className='w-full h-64 rounded-t-xl' src={props.img} alt="" />
      <div className='flex flex-col gap-2 p-3'>
        <h3 className='text-xl font-bold'>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <span className='font-bold'>R$ {props.preco}</span>
        <button className='border w-48 h-9 text-white bg-sky-600 rounded-lg'>Adicionar ao pedido</button>
      </div>
    </div>
  )
}