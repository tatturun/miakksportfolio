import Image from 'next/image';
import Link from "next/link";
import styles from "./page.module.css"; // スタイルシートをインポート

export default function HomePage() {
  return (
    <div className={styles.container}>

      {/*「大学生開発チーム」的な概要 */}
      <p className={styles.overviewText}>
        大学生開発チームMiakksの公式サイトへようこそ！<br />
      </p>

      {/* ロゴ（目いっぱいに表示） */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/banner_t.png"
          alt="Miakks Logo"
          width={250}
          height={250}
          priority
          className={styles.logoImage}
        />
      </div>

      {/* 具体的な説明文 */}
      <p className={styles.specificDescription}>
        具体的な説明文？
      </p>

      <br />
      
      {/* ナビゲーションカード */}
      <nav className={styles.navigation}>
        <Link href="/mvv" className={styles.card}>
          <h2>MVV &rarr;</h2>
          <p>Miakksの存在意義や未来像、メンバーで共有すべき価値観です。</p>
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