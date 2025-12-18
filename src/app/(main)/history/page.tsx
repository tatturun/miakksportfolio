"use client";

import { historyData } from "@/data/history";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HistoryPage() {
    return (
        <div className="max-w-6xl mx-auto mb-16 px-4 overflow-x-hidden">
            <h1 className="text-5xl font-bold text-center m-16">HISTORY</h1>

            {/* 全体のコンテナ */}
            <div className="relative py-8">
                {/* 中央の縦線 (スマホでは左側、PCでは中央) */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200" />

                <div className="space-y-12">
                    {historyData.map((item, index) => (
                        <HistoryItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function HistoryItem({
    item,
    index,
}: {
    item: (typeof historyData)[0];
    index: number;
}) {
    // 偶数かどうか（PC表示時の左右判定に使用）
    const isEven = index % 2 === 0;

    return (
        <motion.div
            // アニメーション設定
            initial={{ opacity: 0, x: isEven ? -50 : 50 }} // 左なら左(-50)から、右なら右(50)から
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // レイアウト設定
            // スマホ: 左パディング確保(pl-12)
            // PC: 左右配置のためにflexを使用。偶数なら行の方向を通常、奇数なら反転(row-reverse)させることで左右配置を実現
            className={`relative flex items-center justify-between md:justify-center w-full pl-12 md:pl-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            {/* --------------------------------------
               カード部分 (幅はPCで45%程度に設定し、中央に隙間を作る)
            --------------------------------------- */}
            <div className="w-full md:w-[45%] mb-4 md:mb-0">
                <div
                    className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow relative
                    ${isEven ? "md:text-right" : "text-left"} 
                `}
                >
                    {/* ↑ テキストの寄せも中央に向かって揃えたい場合は md:text-right を使う */}

                    <span className="text-sm font-bold text-blue-500 mb-1 block">
                        {item.date}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {item.title}
                    </h3>
                    {item.imageUrl && (
                        <div
                            className={`relative mt-4 w-full aspect-video rounded-md overflow-hidden`}
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    )}
                    <p className="text-gray-600 leading-relaxed text-left">
                        {/* 本文は読みやすさのため常に左揃え(text-left)で上書き */}
                        {item.description}
                    </p>
                </div>
            </div>

            {/* --------------------------------------
               中央のドット (●)
            --------------------------------------- */}
            <div className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm z-10" />

            {/* --------------------------------------
               反対側のスペース（PC表示時のレイアウト崩れ防止用ダミー）
               スマホではhidden、PCでは表示してバランスを取る
            --------------------------------------- */}
            <div className="hidden md:block w-[45%]" />
        </motion.div>
    );
}
