import Image from "next/image";
import { Product } from "@/data/product"; // Product型をインポート

type Props = {
    product: Product;
};

// import styles from './ProductCard.module.css';

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center px-3 min-w-[150px]">
            <Image
                src={product.icon}
                alt={product.name}
                width={250}
                height={250}
            />
            <p className="text-3l text-center">{product.concept}</p>
        </div>
    );
}
