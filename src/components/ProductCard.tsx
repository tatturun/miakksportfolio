import Image from "next/image";
import { Product } from "@/data/product"; // Product型をインポート

type Props = {
    product: Product;
};

// import styles from './ProductCard.module.css';

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center m-4">
            <p className="text-3l text-center">{product.concept}</p>
            <h3 className="text-2xl text-center mb-4">{product.name}</h3>
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={250}
                height={250}
            />
        </div>
    );
}
