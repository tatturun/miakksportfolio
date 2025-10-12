// components/ImageGallery.tsx

"use client";

import Image from "next/image";
import { Product } from "@/data/product";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
    product: Product;
}

export default function ImageGallery({ product }: Props) {
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
        <div className="w-full md:w-2/5 relative">
            <div className="relative w-full h-[250px] mx-auto overflow-hidden">
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
    );
}
