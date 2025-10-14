import React from 'react';
import Link from 'next/link'; // リンク表示のためにnext/linkをインポート

type Props = {
    index: string;
    body: string;
    link?: {
        url: string;
        text: string;
    };
};

// 六角形のスタイルを定義
const hexagonStyle = {
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

export default function HoneySentenceCard({ index, body, link }: Props) {
    return (
        <div className="flex-shrink-0 w-[500px] h-[550px] relative group mx-8"> 
            {/* 六角形の背景コンテナ */}
            <div 
                className="absolute inset-0 bg-amber-100 shadow-lg rounded-lg"
                style={hexagonStyle}
            ></div>
        
            {/* コンテンツエリア */}
            <div 
                className="absolute inset-0 flex flex-col justify-center items-center p-8" 
                style={hexagonStyle}
            >
                {/* タイトル */}
                <h3 className="w-full text-center text-lg font-bold text-slate-800 mb-3 h-12 flex items-center justify-center">
                    {index}
                </h3>

                {/* 本文 */}
                <p className="w-full text-center text-sm text-gray-700 whitespace-pre-wrap">
                    {body}
                </p>

                {/* リンク */}
                {link && (
                    <div className="w-full text-center mt-4">
                        <Link 
                            href={link.url} 
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 text-slate-800 text-xs font-bold rounded-full hover:bg-amber-500 transition-colors"
                        >
                            {link.text}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}