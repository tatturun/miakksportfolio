// src/app/(main)/products/descriptions/AIoLIte_Basic.tsx

import { Product } from "@/data/product";
import ImageGallery from "@/components/ImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductAbstract from "@/components/ProductAbstract";
import Image from "next/image";
import SentencebubbleCard from "@/components/SentencebubbleCard";
import CtaLinkButton from "@/components/CtaLinkButton";
import { FaApple, FaGooglePlay, FaPlay} from "react-icons/fa";

type Props = {
    product: Product;
};

export default function AIoLite_BasicDescription({ product }: Props) {
    return (
        <div className="m-6">
            <div className="flex flex-col items-center px-8 pb-4 gap-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    <div className="w-full md:w-2/5">
                        <ImageGallery product={product} />
                    </div>

                    {/* パーテーション */}
                    <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                    <div className="flex flex-col md:overflow-y-auto md:h-[80vh] w-full md:w-3/5">
                        <div className="flex flex-col md:flex-row w-full">
                            <ProductInfo product={product} />

                            <div className="flex flex-col md:flex-row w-full md:w-2/5 mx-6">
                                {/* パーテーション */}
                                <div className="hidden md:block w-px bg-slate-100 self-stretch"></div>

                                <ProductAbstract product={product} />
                            </div>
                        </div>

                        <div className="my-8 mr-8 flex flex-row items-start gap-3">
                            {/* キャラクター画像 */}
                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden self-start">
                                <Image
                                    src={"/images/products/AIoLite_Basic/io.jpeg"}
                                    alt={`${product.name} のキャラクター`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* 各説明項目 */}
                            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory flex-grow pl-4 scroll-pl-4 pr-4 scroll-pr-4 items-start">
                                {(product.description ?? []).map((item) => (
                                    <SentencebubbleCard
                                        key={item.index}
                                        index={item.index}
                                        body={item.body}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* アクションボタン */}
                        <div className="mt-4 flex flex-wrap justify-center items-center gap-4 px-8">
                            <CtaLinkButton
                                href="https://apps.apple.com/jp/app/アイオライト-ベーシック/id6751604328"
                                variant="primary"
                                target="_blank"
                            >
                                <FaApple className="mr-2" size={20} />
                                App Store
                            </CtaLinkButton>
                        
                            <CtaLinkButton
                                href="https://play.google.com/store/apps/details?id=io.github.shun.osugi.AIoLite.Basic"
                                variant="primary"
                                target="_blank"
                            >
                                <FaGooglePlay className="mr-2" size={20} />
                                Google Play
                            </CtaLinkButton>

                            <CtaLinkButton
                                href="https://drive.google.com/file/d/1-ZikHydWm3R_uRJVw4_sVTXTT7_nhtp_/view?usp=drivesdk"
                                variant="secondary" // secondary (濃い灰色) を使用
                                target="_blank"     // 外部リンク
                            >
                                <FaPlay className="mr-2" size={16} /> {/* アイコンサイズを少し小さく */}
                                デモ動画を見る
                            </CtaLinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
