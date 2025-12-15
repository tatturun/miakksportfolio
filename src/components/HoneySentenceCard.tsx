import React from "react";
import Link from "next/link"; // リンク表示のためにnext/linkをインポート

type Props = {
    index: string;
    body: string;
    link?: {
        url: string;
        text: string;
    };
};

// 六角形のスタイルを定義
const hexagonClipPath =
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const hexagonStyle = {
    clipPath: hexagonClipPath,
};

export default function HoneySentenceCard({ index, body, link }: Props) {
    return (
        <div className="max-w-[550px] shrink-0 snap-center flex items-center justify-center p-4 aspect-square relative group">
            {/* 六角形の背景コンテナ */}
            <div
                className="absolute inset-0 w-full h-full bg-amber-200 shadow-lg"
                style={hexagonStyle}
            ></div>
            <div
                className="absolute inset-2 bg-white"
                style={hexagonStyle}
            ></div>

            {/* コンテンツエリア */}
            <div
                className={`
                    relative z-10 w-full h-full flex flex-col justify-center items-center p-4
                    lg:[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]
                `}
            >
                {/* タイトル */}
                <h3 className="w-full text-center text-lg font-bold text-slate-800 pb-3 h-12 flex items-center justify-center bg-white/30">
                    {index}
                </h3>

                {/* 本文 */}
                <p className="w-full text-center text-sm text-gray-700 whitespace-pre-wrap bg-white/30">
                    {body}
                </p>

                {/* リンク */}
                {/* {link && (
                    <div className="w-full text-center mt-4">
                        <Link
                            href={link.url}
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 text-slate-800 text-xs font-bold rounded-full hover:bg-amber-500 transition-colors"
                        >
                            {link.text}
                        </Link>
                    </div>
                )} */}
            </div>
        </div>
    );
}
