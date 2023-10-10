"use client"
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClsoe } from 'react-icons/ai'
import Link from 'next/link';
import Image from 'next/image';
import navImage from '../../images/transparent.png';

import { Mail, Instagram } from 'react-feather';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuIcon, setIcon] = useState(false)

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);

  }
  return (
    <header className='bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10'>
        <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>

<div>
<Link href="/" onClick={handleSmallerScreenNavigation}>
    <span className='font-extrabold text-3x1 md:text-2x1 xl:text-3x1 uppercase'>javascript</span>
</Link>

</div>
        </nav>


    </header>
    
  );
};

export default Navbar;
