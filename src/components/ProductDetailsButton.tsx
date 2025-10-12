// components/ProductDetailsButton.tsx

import Link from "next/link";
import { Product } from "@/data/product";

interface Props {
    product: Product;
}

export default function ProductDetailsButton({ product }: Props) {
    return (
        <div className="w-full flex justify-center md:justify-start md:px-4">
            <Link href={`/products/${product.slug}`}>
                <button className="px-6 py-2 border border-black rounded-full text-black hover:bg-slate-100 transition-colors duration-200">
                    詳細はこちら→
                </button>
            </Link>
        </div>
    );
}
