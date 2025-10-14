// src/app/(main)/products/[slug]/page.tsx

import { products } from "@/data/product";
import { notFound } from "next/navigation";
import SampleDescription from "@/app/(main)/products/descriptions/Sample";
import AIoLite_AdvanceDescription from "../descriptions/AIoLite_Advanced";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const productData = await Promise.resolve(products);
    return productData.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    // slugに応じて適切なコンポーネントを返す
    switch (product.slug) {
        case "Sample":
            return <SampleDescription product={product} />;
        case "AIoLite_Advance":
            return <AIoLite_AdvanceDescription product={product} />;
        // 他のケースを追加
        default:
            return <div>このプロダクトの詳細ページはまだありません。</div>;
    }
}
