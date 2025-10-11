import { products } from "@/data/product";
import Image from "next/image";
import { notFound } from "next/navigation";

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
        notFound(); // プロダクトが見つからない場合は404ページを表示
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <Image
                src={product.icon}
                alt={product.name}
                width={600}
                height={400}
            />
            <p>{product.description}</p>
        </div>
    );
}
