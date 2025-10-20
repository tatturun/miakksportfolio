// components/ProductInfo.tsx

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/product";

interface Props {
    product: Product;
}

export default function ProductInfo({ product }: Props) {
    return (
        <div className="w-full md:w-3/5 flex flex-col items-center md:space-y-10 p-2">
            <h3 className="whitespace-pre-wrap w-full text-xl text-right text-slate-800">
                {product.genre}
            </h3>
            <p className="text-slate-800 text-2xl mb-6">{product.concept}</p>
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

            <div className="w-full flex flex-wrap gap-4 pt-8 md:py-8 justify-center">
                {product.techIcons.map((imageUrl, index) => (
                    <div key={index} className="snap-start flex-shrink-0">
                        <div className="relative w-[45px] h-[45px] overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={`${product.name} の使用技術 ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
