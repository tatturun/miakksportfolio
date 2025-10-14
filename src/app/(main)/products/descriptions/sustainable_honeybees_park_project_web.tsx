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
        <div className="m-auto max-w-7xl p-4 md-p-8">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:min-h-[80vh]">
                
                {/* 左カラム：画像ギャラリー */}
                <div className="w-full lg:w-2/5">
                    <ImageGallery product={product} />
                </div>

                {/* 右カラム：プロダクト情報 */}
                <div className="w-full lg:w-3/5 lg:flex lg:flex-col">
                    <div>
                        <ProductHero product={product} />
                    </div>

                    <div className="lg:mt-auto">
                        <hr className="my-10" />
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">プロジェクトの詳細</h2>
                        
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
    );
}
