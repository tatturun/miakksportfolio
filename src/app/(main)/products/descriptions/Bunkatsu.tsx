// src/app/(main)/products/descriptions/Sample.tsx
"use client";

import { Product } from "@/data/product";
import SentenceCard from "@/components/SentenceCard";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";
import SentenceScrollButton from "@/components/SentenceScrollButton";

type Props = {
    product: Product;
};

export default function BunkatsuDescription({ product }: Props) {
    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <ImageGallery product={product} />

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col md:overflow-y-auto md:h-[80vh] w-full md:w-2/3 custom-scrollbar">
                        <div className="flex flex-col w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col w-full px-6 mt-4">
                                <ProductAbstract product={product} />
                            </div>
                        </div>

                        {/* プロダクト詳細カード部分 */}
                        <div className="m-8">
                            <SentenceScrollButton>
                                {(product.description ?? []).map((item) => (
                                    <div
                                        key={item.index}
                                        className="snap-start shrink-0"
                                    >
                                        <SentenceCard
                                            key={item.index}
                                            index={item.index}
                                            body={item.body}
                                        />
                                    </div>
                                ))}
                            </SentenceScrollButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
