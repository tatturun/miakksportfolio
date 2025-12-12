import Image from "next/image";
import { Product } from "@/data/product"; // Product型をインポート

type Props = {
    product: Product;
};

// import styles from './ProductCard.module.css';

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center min-w-[150px] aspect-square">
            <Image
                src={product.icon}
                alt={product.name}
                width={250}
                height={250}
                className="rounded-3xl w-[60%] h-[60%] object-contain"
            />
            <p className="text-center md:m-4">{product.concept}</p>
        </div>
    );
}
