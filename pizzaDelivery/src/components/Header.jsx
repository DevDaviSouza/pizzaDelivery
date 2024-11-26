
export default function Header() {
  return(
    <>
      <header className='flex flex-col z-50 black bg-opacity-60 bg-slate-200 absolute w-screen py-2'>
        <nav className='flex flex-row justify-end items-center mr-8'>
          <ul className='flex flex-row text-2xl font-semibold gap-5  items-center justify-center'>
            <li className=''>Home</li>
            <li>cardápio</li>
            <li>Contato</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    </>
  )
}