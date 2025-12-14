// src/app/(main)/products/descriptions/Sample.tsx

import { Product } from "@/data/product";
import SentenceCard from "@/components/SentenceCard";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";
import VideoPlayer from "@/components/VideoPlayer";

type Props = {
    product: Product;
};

export default function JeturboDescription({ product }: Props) {
    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full">
                    <div className="w-full md:w-3/5 md:min-w-[300px]">
                        <ImageGallery product={product} />

                        {product.demo && (
                            <div className="mt-4 w-5/6 mx-auto">
                                <h3 className="text-lg font-bold text-slate-800 mb-3 text-center md:text-left">
                                    デモ動画
                                </h3>
                                
                                <VideoPlayer 
                                    src={product.demo} 
                                    title={`${product.name} Demo`}
                                    // 必要なら比率を変えられます
                                    // aspectRatio="4 / 3" 
                                />
                            </div>
                        )}
                    </div>

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col md:overflow-y-auto md:h-[120vh] w-full md:w-2/5 custom-scrollbar">
                        <div className="flex flex-col w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col w-full px-6 mt-4">
                                <ProductAbstract product={product} />
                            </div>
                        </div>

                        {/* プロダクト詳細カード部分 */}
                        <div className="m-8">
                            <div className="flex space-x-4 overflow-x-auto p-4 snap-x snap-mandatory custom-scrollbar">
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
