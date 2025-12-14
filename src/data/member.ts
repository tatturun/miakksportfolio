// SNSリンクの型（変更なし）
type SocialLinks = {
    github?: string;
    twitter?: string;
    qiita?: string;
    note?: string;
    portfolio?: string;
};

// 経歴の型（変更なし）
type History = {
    date: string;
    title: string;
    url?: string;
};

// 資格の型（新規追加）
type Certification = {
    name: string;
    date: string;
    url?: string;
};

// メンバーの型定義
export type Member = {
    slug: string;
    name: string;
    role: string;
    subRole?: string;
    avatarUrl: string;
    color: string;
    bio: string;
    skills: string[];
    certifications?: Certification[];
    socials?: SocialLinks;
    history?: History[];
};

export const members: Member[] = [
    {
        slug: "shun-osugi",
        name: "大杉 駿",
        role: "代表",
        subRole: "Full Stack Engineer",
        avatarUrl: "/images/members/shun_osugi.png",
        color: "#f8b217",
        bio: "情報系大学3年生。",
        skills: ["TypeScript", "Next.js", "Flutter", "Go", "Docker", "AWS"],
        certifications: [
            { date: "2023.05", name: "基本情報技術者試験 合格" },
            { date: "2024.01", name: "AWS Certified Cloud Practitioner" },
        ],
        socials: {
            github: "https://github.com/shun-osugi",
        },
        history: [
            { date: "2023.08", title: "技育CAMP ハッカソン 優秀賞", url: "https://hacku.yahoo.co.jp/hacku2025_osaka/" },
            { date: "2024.02", title: "株式会社〇〇 インターン参加" },
        ],
    },
    {
        slug: "akira-okada",
        name: "岡田 明",
        role: "副代表",
        avatarUrl: "/images/members/akira_okada.png",
        color: "#856daf",
        bio: "",
        skills: []
    },
    {
        slug: "kenya-kaneko",
        name: "金子 拳也",
        role: "会計",
        avatarUrl: "/images/members/kenya_kaneko.png",
        color: "#6bc8f2",
        bio: "",
        skills: []
    },
    {
        slug: "itsuki-oba",
        name: "大場 樹",
        role: "主務",
        avatarUrl: "/images/members/itsuki_oba.png",
        color: "#66bf97",
        bio: "",
        skills: []
    },
    {
        slug: "m",
        name: "M",
        role: "広報",
        avatarUrl: "/images/members/m.png",
        color: "#e7336e",
        bio: "",
        skills: []
    },
];
