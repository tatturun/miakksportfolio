// products/[slug]/page.tsx

import { products } from "@/data/product";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";
import ProductDescriptionWrapper from "@/components/ProductDescriptionWrapper";

type Props = {
    params: {
        slug: string;
    };
};

// ビルド時に動的なパスを静的に生成する
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: Props) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <ImageGallery product={product} />

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col w-full md:w-4/5">
                        <div className="flex flex-col md:flex-row w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col md:flex-row w-full md:w-2/5 mx-6">
                                {/* パーテーション */}
                                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                                <ProductAbstract product={product} />
                            </div>
                        </div>
                        {/* プロダクト詳細 */}
                        <ProductDescriptionWrapper slug={params.slug} />
                    </div>
                </div>
            </div>
        </div>
    );
}
