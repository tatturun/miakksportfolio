// メンバーの型定義
export type Member = {
    slug: string; // URLに使われる一意のID
    name: string; // メンバー名
    role: string; // 役職
    avatarUrl: string; // アバター画像URL
    color: string; // メンバーカラー
};

// メンバーデータの配列
export const members: Member[] = [
    {
        slug: "shun-osugi",
        name: "大杉 駿",
        role: "代表",
        avatarUrl: "/images/members/file.svg",
        color: "#f8b217",
    },
    {
        slug: "akira-okada",
        name: "岡田 明",
        role: "副代表",
        avatarUrl: "/images/members/akira_okada.png",
        color: "#856daf",
    },
    {
        slug: "kenya-kaneko",
        name: "金子 拳也",
        role: "会計",
        avatarUrl: "/images/members/file.svg",
        color: "#6bc8f2",
    },
    {
        slug: "itsuki-oba",
        name: "大場 樹",
        role: "主務",
        avatarUrl: "/images/members/file.svg",
        color: "#66bf97",
    },
];
