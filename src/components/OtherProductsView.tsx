// src/components/OtherProductsView.tsx

import React from "react";
import { products, Product } from "@/data/otherProduct";
import OtherProductCard from "@/components/OtherProductCard";
import ProductCard from "@/components/ProductCard";

interface Props {
    onProductSelect: (product: Product) => void;
}

export default function OtherProductsView({ onProductSelect }: Props) {
    return (
        <div className="w-full h-full p-4 md:p-0">
            <h2 className="text-3xl font-bold mb-6 text-center">
                その他の制作物
            </h2>

            <div className="flex flex-col items-center gap-4 md:max-h-[80vh] overflow-y-auto">
                {products.map((product) => (
                    <div
                        key={product.slug}
                        className="cursor-pointer w-full"
                        onClick={() => onProductSelect(product)}
                    >
                        <OtherProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
