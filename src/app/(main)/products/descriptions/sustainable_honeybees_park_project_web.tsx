// src/app/(main)/products/descriptions/sustainable_honeybees_park_project_web.tsx

import { Product } from "@/data/product";
import SentenceCard from "@/components/SentenceCard";
import ImageGallery from "@/components/ImageGallery";
import ProductHero from "@/components/ProductHero";

type Props = {
    product: Product;
};

export default function SustainableHoneybeesParkProjectWebDescription({ product }: Props) {
    return (
        <div className="m-auto max-w-7xl p-4 md:p-8">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-12">
                
                {/* 左カラム：画像ギャラリー */}
                <div className="w-full lg:w-2/5 ">
                    <ImageGallery product={product} />
                </div>

                {/* 右カラム：プロダクト情報 */}
                <div className="w-full lg:w-3/5">
                    {/* 1. Heroセクション */}
                    <ProductHero product={product} />

                    {/* 区切り線 */}
                    <hr className="my-10" />

                    {/* 2. プロダクト詳細カード部分 */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">プロジェクトの詳細</h2>
                        <div className="flex flex-col gap-6">
                            {(product.description ?? []).map((item) => (
                                <SentenceCard
                                    key={item.index}
                                    index={item.index}
                                    body={item.body}
                                    link={item.link} // linkも忘れずに渡す
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
