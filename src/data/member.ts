// メンバーの型定義
export type Member = {
  slug: string;      // URLに使われる一意のID
  name: string;      // メンバー名
  role: string;      // 役職
  avatarUrl: string; // アバター画像URL
};

// メンバーデータの配列
export const members: Member[] = [
  {
    slug: 'taro-yamada',
    name: '山田 太郎',
    role: 'リードデザイナー',
    avatarUrl: '/images/members/file.svg',
  },
  {
    slug: 'hanako-sato',
    name: '佐藤 花子',
    role: 'フロントエンドエンジニア',
    avatarUrl: '/images/members/globe.svg',
  },
];