import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"; // スタイルシートをインポート

export default function HomePage() {
    return (
        <div className={styles.container}>
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-4">
                {/* 1. 大きなアイコン (左側) */}
                <div className="w-full md:w-1/3 flex justify-center items-center">
                    <Image
                        src="/images/illust_t.png"
                        alt="Large Icon"
                        width={300}
                        height={300}
                        priority
                    />
                </div>

                {/* 2. テキストとロゴのコンテナ (右側 - 縦並び) */}
                <div className="w-full md:w-2/3 flex flex-col justify-center items-center text-right space-y-4">
                    {/* 右上: 文言 */}
                    <p className="text-xl text-center font-medium text-gray-700">
                        大学生開発チームMiakksの公式サイトへようこそ！
                        <br />
                    </p>

                    {/* 右下: ロゴ */}
                    <div className="relative w-full h-32">
                        {" "}
                        {/* ロゴのサイズに合わせて調整 */}
                        <Image
                            src="/images/Miakks_t.png"
                            alt="Miakks Logo"
                            fill // 親要素いっぱいに広げる
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* 具体的な説明文 */}
            <p className={styles.specificDescription}>具体的な説明文？</p>

            <br />

            {/* ナビゲーションカード */}
            <nav className={styles.navigation}>
                <Link href="/mvv" className={styles.card}>
                    <h2>MVV &rarr;</h2>
                    <p>
                        Miakksの存在意義や未来像、メンバーで共有すべき価値観です。
                    </p>
                </Link>
                <Link href="/products" className={styles.card}>
                    <h2>制作物一覧 &rarr;</h2>
                    <p>これまで作成したプロジェクトや作品をご覧ください。</p>
                </Link>
                <Link href="/members" className={styles.card}>
                    <h2>メンバー紹介 &rarr;</h2>
                    <p>一緒に活動しているメンバーのプロフィールです。</p>
                </Link>
            </nav>
        </div>
    );
}
