// components/ProductAbstract.tsx

import { Product } from "@/data/product";

interface Props {
    product: Product;
}

export default function ProductAbstract({ product }: Props) {
    return (
        <div className="w-full p-4">
            <h2 className="whitespace-pre-wrap w-full text-center md:text-start text-xl font-bold text-slate-800 mb-4">
                {product.name}
            </h2>
            <p className="whitespace-pre-wrap w-full text-center md:text-start text-slate-800">
                {product.abstract}
            </p>
        </div>
    );
}
