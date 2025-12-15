"use client";

import React, { useState, useRef, ReactNode, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SentenceScrollButton({ children, className = "" }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // 自動スクロール中かどうかを判定するフラグ
  const isAutoScrolling = useRef(false);
  // 子要素の数をカウント（ボタンの出し分けに使用）
  const childCount = React.Children.count(children);

  // 指定したインデックスのカードを「中央」にスクロールさせる
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cards = container.children;
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        isAutoScrolling.current = true;

        const scrollLeft =
          targetCard.offsetLeft -
          container.clientWidth / 2 +
          targetCard.offsetWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });

        // スクロールが終わった頃にフラグをOFFに戻す
        // (smooth scrollの時間はブラウザ依存ですが、500msあれば概ね安全です)
        setTimeout(() => {
          isAutoScrolling.current = false;
        }, 500);
      }
    }
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < childCount - 1 ? currentIndex + 1 : childCount - 1;
    scrollToIndex(newIndex);
  };

  // ユーザーが手動でスクロールした場合にインデックスを同期する
  const handleScroll = () => {
    // ボタン操作による自動スクロール中は計算しない（判定ズレ防止）
    if (isAutoScrolling.current) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    // コンテナの中心（スクロール位置基準）
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    // 現在のスクロール位置に最も近い要素を探す
    Array.from(container.children).forEach((child, index) => {
      const card = child as HTMLElement;

      // カードの中心
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* 戻るボタン */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-200/90 shadow shadow-gray-400 rounded-full p-2"
          aria-label="前の項目へ"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* スクロールコンテナ */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex space-x-4 overflow-x-auto p-4 snap-x snap-mandatory custom-scrollbar scroll-smooth"
      >
        {children}
      </div>

      {/* 進むボタン */}
      {currentIndex < childCount - 1 && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-200/90 shadow shadow-gray-400 rounded-full p-2"
          aria-label="次の項目へ"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}