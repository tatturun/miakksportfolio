// src/components/SentenceCard.tsx
import React from "react";

// プロパティの型定義
type SentenceCardProps = {
    index: string;
    body: string;
};

export default function SentenceCard({ index, body }: SentenceCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-none w-full sm:w-96 snap-center">
            {/* 見出し */}
            <h3 className="text-xl font-bold text-slate-800 mb-2">{index}</h3>
            {/* 本文 */}
            <p className="text-slate-600 whitespace-pre-line">{body}</p>
        </div>
    );
}
