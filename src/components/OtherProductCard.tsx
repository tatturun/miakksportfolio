// components/OtherProductCard.tsx

import { Product } from "@/data/otherProduct";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";

interface Props {
    product: Product;
}

export default function OtherProductCard({ product }: Props) {
    return (
        <div className="flex flex-col items-center justify-center md:px-8 pb-4 gap-8 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                <ImageGallery product={product} />

                {/* パーテーション */}
                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                <ProductInfo product={product} />
            </div>
            <ProductAbstract product={product} />
        </div>
    );
}
