// プロダクトの型定義（一部の値は必要ないが，コンポーネント用に通常productと統一）
export type Product = {
    slug: string; // URLに使われる一意のID
    name: string; // プロダクト名
    genre: string; // 対応機種等
    concept: string; // プロダクトのコンセプト（一言で）
    abstract: string; // プロダクトの概要（一覧，個別プロダクトページの最上に表示）
    description: {
        index: string;
        body: string;
        link?: { url: string; text: string };
    }[]; // プロダクトの詳細（個別プロダクトページにのみ表示）
    icon: string; // アイコン（正方形）
    logo: string; // ロゴ（横長想定）
    images: string[]; // 画像リスト（一覧，個別プロダクトページの最上に表示）
    techIcons: string[]; // 使用技術のアイコンリスト
};

// プロダクトデータの配列
export const products: Product[] = [
    {
        slug: "DesmoDestroyDash",
        name: "Desmo Destroy Dash",
        genre: "PC",
        concept: "なんでも食べちゃう古代の怪獣!",
        abstract: "",
        description: [],
        icon: "",
        logo: "/images/products/DesmoDestroyDash/Logo.png",
        images: [
            "/images/products/DesmoDestroyDash/Home.png",
            "/images/products/DesmoDestroyDash/GameStart.png",
            "/images/products/DesmoDestroyDash/LevelUp.png",
            "/images/products/DesmoDestroyDash/Goal.png",
            "/images/products/DesmoDestroyDash/Result.png",
        ],
        techIcons: ["/images/techIcons/unity.png"],
    },
    {
        slug: "Busible",
        name: "ビジブル",
        genre: "Android",
        concept: "Busyな毎日を、Visibleに",
        abstract: "",
        description: [],
        icon: "",
        logo: "/images/products/Busible/icon.png",
        images: ["/images/products/window.svg"],
        techIcons: [],
    },
];
