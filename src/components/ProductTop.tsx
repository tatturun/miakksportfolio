"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/product";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"; // 矢印アイコンをインポート

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
                    {" "}
                    {/* 親コンテナにrelativeを追加 */}
                    <div className="flex space-x-4 overflow-hidden p-4 snap-x snap-mandatory">
                        {product.images.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full snap-start transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * 100
                                    }%)`,
                                }}
                            >
                                <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={`${product.name} の画像 ${
                                            index + 1
                                        }`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 戻るボタン */}
                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2"
                        >
                            <FaChevronLeft size={24} />
                        </button>
                    )}
                    {/* 進むボタン */}
                    {currentIndex < product.images.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/50 rounded-full p-2"
                        >
                            <FaChevronRight size={24} />
                        </button>
                    )}
                </div>

                {/* パーテーション */}
                <div className="hidden md:block w-px bg-slate-300 self-stretch"></div>

                {/* テキストセクション (右側) */}
                <div className="w-full md:w-3/5 flex flex-col items-center p-4">
                    {/* 対応機種等 */}
                    <h3 className="whitespace-pre-wrap w-full text-xl text-right text-slate-800">
                        {product.genre}
                    </h3>
                    {/* プロダクトロゴ */}
                    <div className="w-full">
                        <Image
                            src={product.logo}
                            alt={product.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    {/* コンセプト */}
                    <p className="text-slate-800 mb-6">{product.concept}</p>
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
            <div className="w-full p-4">
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
