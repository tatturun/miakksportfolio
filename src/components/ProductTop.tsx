"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/product";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
    product: Product;
}

export default function ProductTop({ product }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < product.images.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    return (
        <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                {/* 画像リスト (左側) */}
                <div className="w-full md:w-2/5 relative">
                    <div className="relative w-full h-[250px] mx-auto overflow-hidden">
                        {/* 現在の画像のみをレンダリング */}
                        <Image
                            src={product.images[currentIndex]}
                            alt={`${product.name} の画像 ${currentIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "100%",
                            }}
                            key={product.images[currentIndex]}
                        />
                    </div>

                    {/* 戻るボタン */}
                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2"
                        >
                            <FaChevronLeft size={24} />
                        </button>
                    )}

                    {/* 進むボタン */}
                    {currentIndex < product.images.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2"
                        >
                            <FaChevronRight size={24} />
                        </button>
                    )}
                </div>

                {/* パーテーション */}
                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                {/* テキストセクション (右側) */}
                <div className="w-full md:w-3/5 flex flex-col items-center p-4">
                    {/* 対応機種等 */}
                    <h3 className="whitespace-pre-wrap w-full text-xl text-right text-slate-800 m-2">
                        {product.genre}
                    </h3>
                    {/* コンセプト */}
                    <p className="text-2xl text-slate-800 m-2">
                        {product.concept}
                    </p>
                    {/* プロダクトロゴ */}
                    <div className="w-full mb-4">
                        <Image
                            src={product.logo}
                            alt={product.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    {/* 使用技術リスト */}
                    <div className="w-full flex flex-wrap gap-4 pb-8 justify-center">
                        {product.techIcons.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="snap-start flex-shrink-0"
                            >
                                <div className="relative w-[45px] h-[45px] overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={`${product.name} の使用技術 ${
                                            index + 1
                                        }`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 詳細ボタン */}
                    <Link href={`/products/${product.slug}`}>
                        <button className="px-6 py-2 border border-black rounded-full text-black hover:bg-slate-100 transition-colors duration-200">
                            詳細はこちら→
                        </button>
                    </Link>
                </div>
            </div>
            {/* テキストセクション */}
            <div className="w-full md:p-4">
                {/* プロダクト名 */}
                <h2 className="whitespace-pre-wrap w-full text-xl font-bold text-slate-800 mb-4">
                    {product.name}
                </h2>
                {/* 概要 */}
                <p className="whitespace-pre-wrap text-slate-800">
                    {product.abstract}
                </p>
            </div>
        </div>
    );
}
