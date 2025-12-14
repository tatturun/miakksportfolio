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
        skills: [
            "Python",
            "FastAPI",
            "AIエージェント",
            "C#",
            "深層学習",
            "Unity",
            "Render",
            "Java",
            "TypeScript",
            "Next.js",
            "Flutter",
            "Docker",
            "firebase",
        ],
        certifications: [
            {
                date: "2025.03",
                name: "Q-Quest2024 - 基礎学習プログラム 修了",
                url: "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/ZDJkSnhXNWV4VitaTjIyQUw2T2ZYQT09",
            },
            {
                date: "2025.03",
                name: "Q-Quest2024 - 事業創造プログラム 修了",
                url: "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/TTAzMXpGRjNGQkdiN0dlcjVIenZIZz09",
            },
            { date: "2025.05", name: "基本情報技術者試験 合格" },
            {
                date: "2025.07",
                name: "Deep Learning 基礎講座 2025 Spring 修了",
                url: "https://drive.google.com/file/d/12ZK2UzPrVYaX4JGWh6Mg_eIiv8ucAixH/view?usp=sharing",
            },
            {
                date: "2025.09",
                name: "GPS-Academic 思考力Sランク",
                url: "https://drive.google.com/file/d/1Knh8ZRglFCLWkwfT8NClaXFpi5S6nHla/view?usp=sharing",
            },
        ],
        socials: {
            github: "https://github.com/shun-osugi",
        },
        history: [
            {
                date: "2023.08",
                title: "技育CAMP ハッカソン 優秀賞",
                url: "https://hacku.yahoo.co.jp/hacku2025_osaka/",
            },
            { date: "2024.02", title: "株式会社〇〇 インターン参加" },
        ],
    },
    {
        slug: "akira-okada",
        name: "岡田 明",
        role: "副代表",
        subRole: "UI/UX Designer / Frontend Engineer",
        avatarUrl: "/images/members/akira_okada.png",
        color: "#856daf",
        bio: "「ユーザーの心に響く、かけがえのない体験を届けたい」という想いを胸に、UI/UXデザインからプログラミング実装までを担当しています。技術とデザイン、両方の視点を持つことで、チームのアイデアを細部にまでこだわった、価値あるプロダクトとして具現化していきます。",
        skills: [
            "Dart",
            "Flutter",
            "Python",
            "C#",
            "Unity",
            "Java",
            "HTML",
            "CSS",
            "TypeScript",
            "Next.js",
            "Firebase",
            "Figma",
            "Blender",
            "Photoshop",
            "Illustrator",
        ],
        certifications: [
            { date: "2025.02", name: "基本情報技術者試験 合格" },
            {
                date: "2025.09",
                name: "GPS-Academic 思考力Sランク",
                url: "https://drive.google.com/file/d/1yQGMajuq7ROFcg1WfQOPK6H13nHWJc7u/view?usp=sharing",
            },
            { date: "2025.11", name: "文部科学省後援 色彩検定3級 合格" },
            { date: "2025.11", name: "文部科学省後援 色彩検定2級 合格" },
            {
                date: "2025.11",
                name: "TOEIC Listening & Reading Test 750点 取得",
                url: "https://drive.google.com/file/d/14T4VspACHw8C90S_Mh5UZFh-JF3qUwsV/view?usp=sharing",
            },
        ],
        socials: {
            github: "https://github.com/kilera-okd",
            portfolio: "https://www.vivivit.com/kilera",
        },
        history: [
            {
                date: "2025.03",
                title: "Open Hack U 2025 OSAKA 「AIoLite」",
            },
            {
                date: "2025.03",
                title: "Flutter Jr ハッカソン 「ブン喝ッ!!」 MVP賞",
            },
            {
                date: "2025.05",
                title: "技育博 2025 Vol.2 「AIoLite」 サイバーエージェント賞 CARTA HOLDINGS賞",
            },
            {
                date: "2025.09",
                title: "技育CAMPキャラバン 「ジェッターボ」",
            },
            {
                date: "2025.11",
                title: "Re;Build in 愛知 2025 「AIoLite ベーシック/アドバンス」",
            },
            {
                date: "2025.11",
                title: "技育展 2025 「AIoLite アドバンス」 ウイングアーク1st賞",
            },
        ],
    },
    {
        slug: "kenya-kaneko",
        name: "金子 拳也",
        role: "会計",
        avatarUrl: "/images/members/kenya_kaneko.png",
        color: "#6bc8f2",
        bio: "",
        skills: [],
    },
    {
        slug: "itsuki-oba",
        name: "大場 樹",
        role: "主務",
        avatarUrl: "/images/members/itsuki_oba.png",
        color: "#66bf97",
        bio: "",
        skills: [],
    },
    {
        slug: "m",
        name: "M",
        role: "広報",
        avatarUrl: "/images/members/m.png",
        color: "#e7336e",
        bio: "",
        skills: [],
    },
];
