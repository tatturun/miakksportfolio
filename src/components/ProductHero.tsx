import Image from "next/image";
import { Product } from "@/data/product";
import Link from "next/link";

interface Props {
    product: Product;
}

export default function ProductHero({ product }: Props) {
    return (
        <div className="flex flex-col items-center md:items-start gap-5 p-4 w-full">
            {/* ロゴ画像 */}
            <Image
                src={product.logo}
                alt={`${product.name} ロゴ`}
                width={300} // サイズは適宜調整
                height={80}  // サイズは適宜調整
                className="object-contain"
            />
            {/* プロダクト名 */}
            <h1 className="text-4xl font-bold text-slate-800 text-center md:text-left">
                {product.name}
            </h1>
            {/* コンセプト */}
            <p className="text-lg text-slate-600 whitespace-pre-wrap text-center md:text-left">
                {product.concept}
            </p>
            {/* リンクボタン */}
            {product.link && (
                <div className="mt-6 w-full md:w-auto flex flex-col items-center md:items-start">
                    <p className="text-lg font-bold text-slate-600 mb-2 animate-bounce">
                        詳しくはコチラ👇
                    </p>
                    <Link
                        href={product.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-full md:w-auto px-8 py-3 bg-amber-200 hover:bg-amber-500 text-white font-bold rounded-full shadow-md transition-all transform hover:scale-105"
                    >
                        {product.link.text} 
                        <span className="ml-2">🚀</span>
                    </Link>
                </div>
            )}
            {/* 使用技術 */}
            <div className="flex flex-col items-center md:items-start gap-3 mt-4">
                <h3 className="font-semibold text-slate-700">使用技術</h3>
                <div className="flex gap-4">
                    {(product.techIcons ?? []).map((iconSrc) => (
                        <div key={iconSrc} className="relative w-10 h-10">
                            <Image src={iconSrc} alt="技術アイコン" fill className="object-contain"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}