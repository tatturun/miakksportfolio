// src/components/VideoPlayer.tsx

import React from "react";

type Props = {
  src: string | undefined; // 動画URL (undefinedの可能性も考慮)
  title?: string;          // 動画のタイトル (アクセシビリティ用)
  aspectRatio?: string;    // 比率 (デフォルトは 16/9)
};

export default function VideoPlayer({ 
  src, 
  title = "Demo Video", 
  aspectRatio = "16 / 9" 
}: Props) {
  // URLがない場合は何も表示しない
  if (!src) return null;

  return (
    <div 
      className="relative w-full rounded-xl overflow-hidden shadow-lg border border-slate-200"
      style={{ aspectRatio }} 
    >
      <iframe
        src={src}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; fullscreen"
        allowFullScreen
        title={title}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}