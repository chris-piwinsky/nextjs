// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link href="./about" className="text-white hover:text-gray-200">About</Link>
        </li>
        <li>
          <Link href="./contact" className="text-white hover:text-gray-200">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
