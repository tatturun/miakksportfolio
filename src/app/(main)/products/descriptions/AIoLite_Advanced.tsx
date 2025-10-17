// src/app/(main)/products/descriptions/AIoLite_Advance.tsx

import { Product } from "@/data/product";
import SentenceCard from "@/components/SentenceCard";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";
import CtaLinkButton from "@/components/CtaLinkButton";

type Props = {
    product: Product;
};

export default function AIoLite_AdvanceDescription({ product }: Props) {
    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <div className="w-full md:w-1/3 md:min-w-[300px]">
                        <ImageGallery product={product} />
                    </div>

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col md:overflow-y-auto overflow-x-hidden md:h-[80vh] w-full md:w-2/3">
                        <div className="flex flex-col w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col w-full mx-6">
                                {/* パーテーション */}

                                <ProductAbstract product={product} />
                            </div>
                        </div>

                        {/* プロダクト詳細カード部分 */}
                        <div className="m-8">
                            <div className="flex space-x-4 overflow-x-auto p-4 snap-x snap-mandatory">
                                {(product.description ?? []).map((item) => (
                                    <SentenceCard
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
                                App Storeでインストール
                            </CtaLinkButton>

                            {/* Android インストールボタン (青色 - primary) */}
                            <CtaLinkButton
                                href=""
                                variant="primary"
                                target="_blank"
                            >
                                Google Playは準備中
                            </CtaLinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
