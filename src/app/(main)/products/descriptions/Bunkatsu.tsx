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
        <div className="m-0 lg:m-6">
            <div className="flex flex-col items-center px-4 lg:px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
                    <div className="w-full">
                        <ImageGallery product={product} />
                    </div>

                    {/* パーテーション */}
                    <div className="hidden lg:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col lg:overflow-y-auto lg:h-[120vh] w-full lg:w-min-100 custom-scrollbar">
                        <div className="flex flex-col w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col w-full px-6 mt-4">
                                <ProductAbstract product={product} />
                            </div>
                        </div>

                        {/* プロダクト詳細カード部分 */}
                        <div className="m-4 lg:m-8">
                            {/* スマホ用レイアウト: 縦並び */}
                            <div className="flex flex-col gap-6 lg:hidden items-center">
                                {(product.description ?? []).map((item) => (
                                    <div key={item.index} className="w-full">
                                        <SentenceCard
                                            index={item.index}
                                            body={item.body}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* 2. PC用レイアウト: 横スクロール */}
                            <div className="hidden lg:block">
                                <SentenceScrollButton>
                                    {(product.description ?? []).map((item) => (
                                        <div
                                            key={item.index}
                                            className=""
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
        </div>
    );
}
