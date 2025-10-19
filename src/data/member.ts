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
    slug: 'shun-osugi',
    name: '大杉 駿',
    role: '団体代表',
    avatarUrl: '/images/members/file.svg',
  },
];