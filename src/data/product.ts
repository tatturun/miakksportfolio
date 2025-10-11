// プロダクトの型定義
export type Product = {
    slug: string; // URLに使われる一意のID
    name: string; // プロダクト名
    concept: string; // プロダクトのコンセプト（一言で）
    abstract: string; // プロダクトの概要（一覧，個別プロダクトページの最上に表示）
    description: string[]; // プロダクトの詳細（個別プロダクトページにのみ表示）
    imageUrl: string; // カード用画像（正方形
    images: string[]; // 画像リスト（一覧，個別プロダクトページの最上に表示）
};

// プロダクトデータの配列
export const products: Product[] = [
    {
        slug: "product-a",
        name: "アイオライト アドバンスド",
        concept: "あなた専用のAI家庭教師",
        abstract:
            "Open Hack U 2025 OSAKA にて制作．<br>技育博 2025 Vol.2 にて、<br>株式会社 サイバーエージェント 賞  受賞<br>株式会社 CARTA HOLDINGS 賞  受賞",
        description: [],
        imageUrl: "/images/products/window.svg",
        images: [
            "images/products/window.svg",
            "images/products/window.svg",
            "images/products/window.svg",
        ],
    },
    {
        slug: "product-b",
        name: "プロダクトB",
        concept: "概要",
        abstract: "詳細",
        description: [],
        imageUrl: "images/products/window.svg",
        images: [],
    },
    {
        slug: "product-c",
        name: "プロダクトC",
        concept: "概要",
        abstract: "詳細",
        description: [],
        imageUrl: "images/products/window.svg",
        images: [],
    },
    {
        slug: "product-d",
        name: "プロダクトD",
        concept: "概要",
        abstract: "詳細",
        description: [],
        imageUrl: "images/products/window.svg",
        images: [],
    },
    {
        slug: "product-e",
        name: "プロダクトE",
        concept: "概要",
        abstract: "詳細",
        description: [],
        imageUrl: "images/products/window.svg",
        images: [],
    },
];
