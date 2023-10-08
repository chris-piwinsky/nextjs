import Link from 'next/link';
import Image from 'next/image';
import navImage from '../../images/transparent.png'; 

import { Mail, Instagram } from 'react-feather';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`flex space-x-4 ${styles.navLinksContainer}`}>
        <div className="flex items-center"> {/* Create a flex container */}
          <Image
            src={navImage}
            alt="Logo"
            className={styles.navbarLogo}
            width={200}
            height={100}
          />
          <ul className={`flex space-x-4 ${styles.navLinks}`}>
            <li className={styles.link}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">The Curmudgeons</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex space-x-4 ${styles.navLinksContainer}`}>
        <ul className={`flex space-x-4 ${styles.navLinks}`}>
          <li className={styles.link}>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className={styles.link}>
            <a href="mailto:youremail@example.com">
              <Mail size={20} />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
