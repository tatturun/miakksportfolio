import React from 'react';

/**
 * @typedef {('primary' | 'secondary')} ButtonVariant
 * primary: 水色 (インストール促進など、強調したいアクションに使用)
 * secondary: 濃い灰色 (詳細へ、戻るなど、標準的なアクションに使用)
 */
type ButtonVariant = 'primary' | 'secondary';

interface Props {
    href: string; // 遷移先のURL (外部リンクも可)
    children: React.ReactNode; // ボタン内に表示するテキスト
    variant?: ButtonVariant; // ボタンのスタイルバリアント
    target?: string; // リンクの開き方 ('_blank'で新しいタブなど)
}

/**
 * 多用途に使えるスタイル付きのリンクボタンコンポーネント
 * @param {Props} props - コンポーネントのプロパティ
 */
export default function CtaLinkButton({
    href,
    children,
    variant = 'secondary',
    target = '_self'
}: Props) {

    // スタイルをバリアントに応じて決定
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition-colors duration-200 shadow-md transform hover:scale-[1.02]";

    // primary: 濃い水色 (Sky Blue 600) と文字色（白）
    // ★ 修正点: text-white をここに戻しました。
    const primaryStyle = "bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50";

    // secondary: 濃い灰色 (Gray 500) と文字色（白）
    // ★ 修正点: text-white をここに戻しました。
    const secondaryStyle = "bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 border border-transparent";

    const selectedStyle = variant === 'primary' ? primaryStyle : secondaryStyle;

    return (
        <a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            // ★ 修正点: 競合を避けるため、text-white の適用を selectedStyle に任せ、ここから削除しました。
            className={`${baseStyle} ${selectedStyle} inline-flex items-center justify-center`}
        >
            {children}
        </a>
    );
}
