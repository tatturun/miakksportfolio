import Link from 'next/link';

// import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/members">Members</Link>
      </nav>
    </header>
  );
}