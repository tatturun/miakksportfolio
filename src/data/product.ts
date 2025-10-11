// プロダクトの型定義
export type Product = {
    slug: string; // URLに使われる一意のID
    name: string; // プロダクト名
    genre: string; // 対応機種等
    concept: string; // プロダクトのコンセプト（一言で）
    abstract: string; // プロダクトの概要（一覧，個別プロダクトページの最上に表示）
    description: string[]; // プロダクトの詳細（個別プロダクトページにのみ表示）
    icon: string; // アイコン（正方形）
    logo: string; // ロゴ（横長想定）
    images: string[]; // 画像リスト（一覧，個別プロダクトページの最上に表示）
    techIcons: string[]; // 使用技術のアイコンリスト
};

// プロダクトデータの配列
export const products: Product[] = [
    {
        slug: "product-a",
        name: "アイオライト アドバンス",
        genre: "iOS Android",
        concept: "あなた専用のAI家庭教師",
        abstract:
            "Open Hack U 2025 OSAKA にて制作．\n技育博 2025 Vol.2 にて、株式会社 サイバーエージェント 賞  受賞，株式会社 CARTA HOLDINGS 賞  受賞",
        description: [],
        icon: "/images/products/window.svg",
        logo: "/images/products/AIoLite_Advance/AIoLite_text_black.png",
        images: [
            "images/products/window.svg",
            "images/products/window.svg",
            "images/products/window.svg",
        ],
        techIcons: [
            "images/techIcons/github-mark.svg",
            "images/techIcons/github-mark.svg",
            "images/techIcons/github-mark.svg",
        ],
    },
    {
        slug: "product-b",
        name: "プロダクトB",
        genre: "",
        concept: "概要",
        abstract: "詳細",
        description: [],
        icon: "images/products/window.svg",
        logo: "",
        images: [],
        techIcons: [],
    },
    {
        slug: "product-c",
        name: "プロダクトC",
        genre: "",
        concept: "概要",
        abstract: "詳細",
        description: [],
        icon: "images/products/window.svg",
        logo: "",
        images: [],
        techIcons: [],
    },
    {
        slug: "product-d",
        name: "プロダクトD",
        genre: "",
        concept: "概要",
        abstract: "詳細",
        description: [],
        icon: "images/products/window.svg",
        logo: "",
        images: [],
        techIcons: [],
    },
    {
        slug: "product-e",
        name: "プロダクトE",
        genre: "",
        concept: "概要",
        abstract: "詳細",
        description: [],
        icon: "images/products/window.svg",
        logo: "",
        images: [],
        techIcons: [],
    },
];
