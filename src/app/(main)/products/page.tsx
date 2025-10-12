"use client";

import { products, Product } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDetailsButton from "@/components/ProductDetailsButton";
import ProductAbstract from "@/components/ProductAbstract";
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
            <div className="flex flex-col md:flex-row w-4/5 md:w-full max-w-7xl md:h-[80vh] gap-8 mb-16">
                {/* プロダクトカードリスト (モバイルでは上部・横並び、デスクトップでは左側・縦並び) */}
                <div className="w-full md:w-1/4 overflow-x-auto md:overflow-y-auto flex flex-row md:flex-col items-start space-x-4 md:space-x-0 md:space-y-4 p-4">
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

                {/* パーテーション */}
                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                {/* プロダクト概要 (右側) */}
                <div className="w-full md:w-3/4 overflow-y-auto pb-4">
                    {selectedProduct && (
                        <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                                <ImageGallery product={selectedProduct} />

                                {/* パーテーション */}
                                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                                <ProductInfo product={selectedProduct} />
                            </div>
                            <ProductAbstract product={selectedProduct} />
                            <ProductDetailsButton product={selectedProduct} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
