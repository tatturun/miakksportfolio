// components/ImageGallery.tsx

"use client";

import Image from "next/image";
import { Product } from "@/data/product";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
    product: Product;
}

export default function ImageGallery({ product }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [product.slug]);

    const SMARTPHONE_PRODUCTS = ["AIoLite_Basic", "AIoLite_Advance"];
    // 現在のプロダクトが対象かどうかを判定
    const isSmartphone = SMARTPHONE_PRODUCTS.includes(product.slug);

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
        <div className="w-full flex justify-center items-center relative px-10 md:px-8">
            <div
                className={`relative mx-auto overflow-hidden transition-all duration-300 ${
                    isSmartphone
                        ? // 縦横比をスマホ(9:19.5)に固定、最大幅制限、太い枠線、大きな角丸、影
                          "w-full max-w-[280px] md:max-w-[320px] aspect-[9/19.5] border-[8px] md:border-[12px] border-slate-800 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl bg-black"
                        : "w-full min-h-[500px]"
                }`}
            >
                {/* (オプション) スマホ時に上部にノッチ（切り欠き）風の装飾を追加 */}
                {isSmartphone && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[18px] bg-slate-800 rounded-b-xl z-20 pointer-events-none"></div>
                )}

                <Image
                    src={product.images[currentIndex]}
                    alt={`${product.name} の画像 ${currentIndex + 1}`}
                    fill
                    sizes={isSmartphone ? "(max-width: 768px) 280px, 320px" : "100vw, 50vw, 33vw"}
                    style={{
                        objectFit: isSmartphone ? "cover" : "contain",
                    }}
                    // スマホ時は画像自体にも少し角丸をつけて自然に見せる
                    className={isSmartphone ? "rounded-[1.8rem] md:rounded-[2.8rem p-1.5 md:p-2" : ""}
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
    );
}
