// src/app/(main)/products/[slug]/page.tsx

import { products } from "@/data/product";
import { notFound } from "next/navigation";
import AIoLite_AdvanceDescription from "../descriptions/AIoLite_Advanced";
import AIoLite_BasicDescription from "../descriptions/AIoLite_Basic";
import JeturboDescription from "../descriptions/Jeturbo";
import SustainableHoneybeesParkProjectWebDescription from "@/app/(main)/products/descriptions/sustainable_honeybees_park_project_web";
import BunkatsuDescription from "../descriptions/Bunkatsu";

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

    // slugに応じて適切なコンポーネントを返す AIoLite_BasicDescription
    switch (product.slug) {
        case "AIoLite_Advance":
            return <AIoLite_AdvanceDescription product={product} />;
        case "AIoLite_Basic":
            return <AIoLite_BasicDescription product={product} />;
        case "Jeturbo":
            return <JeturboDescription product={product} />;
        case "sustainable_honeybees_park_project_web":
            return <SustainableHoneybeesParkProjectWebDescription product={product} />;
        case "Bunkatsu":
            return <BunkatsuDescription product={product} />;
        // 他のケースを追加
        default:
            return <div>このプロダクトの詳細ページはまだありません。</div>;
    }
}
