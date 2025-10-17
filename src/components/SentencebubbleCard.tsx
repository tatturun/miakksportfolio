import React from "react";

type SentencebubbleCardProps = {
    index: string;
    body: string;
    link?: { url: string; text: string; };
};

export default function SentencebubbleCard({ index, body, link }: SentencebubbleCardProps) {
    return (
        <div className="relative bg-white rounded-2xl shadow-lg p-6 flex-none w-full snap-start">
            {/* 吹き出しの「しっぽ」 */}
            <div className="absolute top-6 -left-3 w-0 h-0 z-0
                            border-t-[10px] border-t-transparent
                            border-r-[16px] border-r-white
                            border-b-[10px] border-b-transparent
            ">
            </div>

            <h3 className="relative z-10 text-lg sm:text-xl font-bold text-slate-800 mb-2">{index}</h3>
            
            <p className="relative z-10 text-sm sm:text-base text-slate-600 whitespace-pre-line">{body}</p>
            
            {link && (
                <div className="relative z-10 mt-4">
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline font-bold"
                    >
                        {link.text}
                    </a>
                </div>
            )}
        </div>
    );
}