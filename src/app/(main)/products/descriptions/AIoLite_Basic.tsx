// src/app/(main)/products/descriptions/AIoLIte_Basic.tsx

import { Product } from "@/data/product";
import SentenceCard from "@/components/SentenceCard";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";

type Props = {
    product: Product;
};

export default function AIoLite_BasicDescription({ product }: Props) {
    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <ImageGallery product={product} />

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col md:overflow-y-auto md:h-[80vh] w-full md:w-2/3">
                        <div className="flex flex-col md:flex-row w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col md:flex-row w-full md:w-2/5 mx-6">
                                {/* パーテーション */}
                                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

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
                    </div>
                </div>
            </div>
        </div>
    );
}
