// src/app/(main)/products/descriptions/AIoLite_Advance.tsx

import { Product } from "@/data/product";
import SentencebubbleCard from "@/components/SentencebubbleCard";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";
import CtaLinkButton from "@/components/CtaLinkButton";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

type Props = {
    product: Product;
};

export default function AIoLite_AdvanceDescription({ product }: Props) {
    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <div className="w-full md:w-1/3 md:min-w-[500px]">
                        <ImageGallery product={product} />
                    </div>

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col md:overflow-y-auto overflow-x-hidden md:h-[80vh] w-full md:w-2/3 custom-scrollbar">
                        <div className="flex flex-col w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col w-full mx-6">
                                <ProductAbstract product={product} />
                            </div>
                        </div>

                        {/* プロダクト詳細カード部分 */}
                        <div className="my-8 mr-8 flex flex-row items-start gap-3 min-h-[200px]">
                            {/* キャラクター画像 */}
                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden self-start">
                                <Image
                                    src={"/images/products/AIoLite_Advance/io.png"}
                                    alt={`${product.name} のキャラクター`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{objectFit: "cover"}}
                                />
                            </div>

                            {/* 各説明項目 (SentencebubbleCardに変更) */}
                            <div className="flex flex-col overflow-y-auto snap-y snap-mandatory flex-grow w-full h-full custom-scrollbar">
                                {(product.description ?? []).map((item) => (
                                    <SentencebubbleCard
                                        key={item.index}
                                        index={item.index}
                                        body={item.body}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8 justify-center text-white">
                            <CtaLinkButton
                                href="https://apps.apple.com/jp/app/アイオライト-アドバンス/id6752316526"
                                variant="primary"
                                target="_blank"
                            >
                                <FaApple className="mr-2" size={20} />
                                App Storeでインストール
                            </CtaLinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
