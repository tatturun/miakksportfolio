"use client";

import { products, Product } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import ProductTop from "@/components/ProductTop";
import { useState } from "react";

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        products[0]
    );

    const handleCardClick = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="flex flex-col items-center">
            {/* タイトル */}
            <h1 className="text-5xl font-bold text-center m-16">PRODUCTS</h1>

            {/* メインコンテンツコンテナ */}
            <div className="flex w-full max-w-7xl h-[80vh] gap-8 mb-16">
                {/* プロダクトトップ (右側) */}
                <div className="w-3/4 overflow-y-auto p-4">
                    {selectedProduct && (
                        <ProductTop product={selectedProduct} />
                    )}
                </div>

                {/* パーテーション */}
                <div className="w-px bg-slate-300"></div>

                {/* プロダクトカードリスト (左側) */}
                <div className="w-1/4 overflow-y-auto m-4 flex flex-col items-center space-y-4">
                    {products.map((product) => (
                        <div
                            key={product.slug}
                            onClick={() => handleCardClick(product)}
                            className="cursor-pointer"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
