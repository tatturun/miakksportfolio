import Image from "next/image";
import { Product } from "@/data/product"; // Product型をインポート

type Props = {
    product: Product;
};

// import styles from './ProductCard.module.css';

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center px-5 min-w-[150px]">
            <Image
                src={product.icon}
                alt={product.name}
                width={250}
                height={250}
                className="rounded-3xl"
            />
            <p className="text-3l text-center m-4">{product.concept}</p>
        </div>
    );
}
