import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/product'; // Product型をインポート

type Props = {
  product: Product;
};

// import styles from './ProductCard.module.css';

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <Image src={product.imageUrl} alt={product.name} width={300} height={200} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </Link>
  );
}