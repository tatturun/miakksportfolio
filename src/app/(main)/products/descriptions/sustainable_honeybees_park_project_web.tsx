// src/app/(main)/products/descriptions/sustainable_honeybees_park_project_web.tsx

import { Product } from "@/data/product";
import HoneySentenceCard from "@/components/HoneySentenceCard";
import ImageGallery from "@/components/ImageGallery";
import ProductHero from "@/components/ProductHero";

type Props = {
    product: Product;
};

export default function SustainableHoneybeesParkProjectWebDescription({ product }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-100 to-[#8BC34A]">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
                    <br />
                    
                    {/* 左カラム：画像ギャラリー */}
                    <div className="w-full lg:w-2/5">
                        <ImageGallery product={product} />
                    </div>

                    {/* 右カラム：プロダクト情報 */}
                    <div className="w-full lg:w-3/5 lg:flex lg:flex-col">
                        <div>
                            <ProductHero product={product} />
                        </div>

                        <div className="lg:mt-auto text-center">
                            <hr className="my-10" />
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">プロジェクトの詳細</h2>
                            
                            <div className="flex overflow-x-auto hide-scrollbar scroll-px-4">
                                {(product.description ?? []).map((item) => (
                                    <HoneySentenceCard
                                        key={item.index}
                                        index={item.index}
                                        body={item.body}
                                        link={item.link}
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