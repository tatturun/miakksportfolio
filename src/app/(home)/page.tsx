import Link from "next/link";
import styles from "./page.module.css"; // スタイルシートをインポート

export default function HomePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>ようこそ、私のポートフォリオへ</h1>
                <p className={styles.description}>
                    ここでは私の制作物やメンバーを紹介しています。
                </p>
            </header>

            <nav className={styles.navigation}>
                <Link href="/products" className={styles.card}>
                    <h2>制作物一覧 (Products) &rarr;</h2>
                    <p>これまで作成したプロジェクトや作品をご覧ください。</p>
                </Link>

                <Link href="/members" className={styles.card}>
                    <h2>メンバー紹介 (Members) &rarr;</h2>
                    <p>一緒に活動しているメンバーのプロフィールです。</p>
                </Link>
            </nav>
        </div>
    );
}
