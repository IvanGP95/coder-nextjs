import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
// Importa el ícono que desees utilizar para el carrito desde tu librería de íconos preferida

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:text-gray-300">Logo</Link>
        </div>
        <nav>
          <ul className="flex space-x-10 items-center">
            {/* Enlaces de navegación */}
            <li>
            <Link href="/" className="text-l font-bold hover:text-gray-300">Home</Link>
            </li>
            <li>
            <Link href="/" className="text-l font-bold hover:text-gray-300">Store</Link>
            </li>
            <li>
              {/* Icono de carrito */}
              <Link href="/">
                <AiOutlineShoppingCart  className='h-8 w-6 hover:text-green-500' />
              </Link>
            </li>
            <li>
              {/* Botón de Login */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
