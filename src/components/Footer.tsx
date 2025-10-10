"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { NAV_LINKS } from "@/types/navigation";

const Footer = () => {
    // フッター専用のリンク順序を定義
    const FOOTER_LINKS = [
        NAV_LINKS[0], // Top (左上)
        NAV_LINKS[2], // Products (左下)
        NAV_LINKS[1], // MVV (右上)
        NAV_LINKS[3], // Members (右下)
    ];

    return (
        <footer className="py-12 px-4 bg-stone-50/70">
            <div className="container mx-auto text-center text-stone-600 flex justify-center items-center">
                <div className="flex justify-center items-center space-x-4">
                    <div className="flex flex-col items-start space-y-2">
                        <div className="flex items-center space-x-4">
                            {/* ロゴ画像 */}
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/images/banner_t.png"
                                    alt="Miakks"
                                    width={240}
                                    height={80}
                                />
                            </Link>

                            {/* インスタグラムアイコン */}
                            <Link
                                href="https://www.instagram.com/miakks_m/"
                                className="text-pink-700 transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={48} />
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            {/* テキスト */}
                            <p className="text-lg text-gray-800">
                                お問い合わせはこちらから
                            </p>

                            {/* コンタクトボタン */}
                            <Link
                                href="https://forms.gle/M95HJP6oA58meBSBA"
                                className="px-8 py-1 border border-black rounded-full text-black hover:bg-gray-100 transition-colors duration-200 flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* 縦棒 */}
                    <div className="h-36 w-px bg-stone-400 hidden md:block"></div>

                    {/* 2×2 ボタン */}
                    <div className="grid grid-cols-2 gap-2 hidden md:grid">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="w-full text-center px-4 py-2 text-stone-700 rounded-md hover:bg-stone-300 transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
