"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/product";

interface Props {
    product: Product;
}

export default function ProductTop({ product }: Props) {
    return (
        <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                {/* 画像リスト (左側) */}
                <div className="w-full md:w-1/2 flex space-x-4 overflow-x-auto p-4 snap-x snap-mandatory">
                    {product.images.map((imageUrl, index) => (
                        <div key={index} className="snap-start flex-shrink-0">
                            <div className="relative w-[250px] h-[250px] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={imageUrl}
                                    alt={`${product.name} の画像 ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* パーテーション */}
                <div className="hidden md:block h-64 w-px bg-slate-300"></div>

                {/* テキストセクション (右側) */}
                <div className="w-full md:w-1/2 flex flex-col items-start p-4">
                    <h2 className="whitespace-pre-wrap text-4xl font-bold text-slate-900 mb-4">
                        {product.name}
                    </h2>
                    <p className="text-slate-800 mb-6">{product.concept}</p>
                    <Link href={`/products/${product.slug}`}>
                        <button className="px-6 py-2 border border-black rounded-full text-black hover:bg-slate-100 transition-colors duration-200">
                            詳細はこちら
                        </button>
                    </Link>
                </div>
            </div>
            {/* テキストセクション */}
            <div className="w-full p-4">
                <p className="whitespace-pre-wrap text-slate-800">
                    {product.abstract}
                </p>
            </div>
        </div>
    );
}
