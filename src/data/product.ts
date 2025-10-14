// プロダクトの型定義
export type Product = {
    slug: string; // URLに使われる一意のID
    name: string; // プロダクト名
    genre: string; // 対応機種等
    concept: string; // プロダクトのコンセプト（一言で）
    abstract: string; // プロダクトの概要（一覧，個別プロダクトページの最上に表示）
    description: { index: string; body: string }[]; // プロダクトの詳細（個別プロダクトページにのみ表示）
    icon: string; // アイコン（正方形）
    logo: string; // ロゴ（横長想定）
    images: string[]; // 画像リスト（一覧，個別プロダクトページの最上に表示）
    techIcons: string[]; // 使用技術のアイコンリスト
};

// プロダクトデータの配列
export const products: Product[] = [
    {
        slug: "Sample",
        name: "サンプルプロダクト",
        genre: "iOS Android",
        concept: "こちらサンプルっす",
        abstract:
            "プロダクトの例です．\nサンプルを参考に各ページを作成してください",
        description: [
            {
                index: "プロダクト一覧ページ",
                body: "プロダクト一覧ページで左側に表示されるアイコンを押すと，概要が表示されます．\n「詳細はこちら→」ボタンを押すことで，動的にproducts/[slug]/page.tsxが読み込まれます．",
            },
            {
                index: "各プロダクトページへの流れ",
                body: "products/[slug]/page.tsxでは，switch文によってproducts/descriptions/{プロダクト名}の各ページに分岐させています．\n各プロダクトページを追加してproducts/[slug]/page.tsx内のswitch文に条件を追加してください．ファイル名は問いませんが，slugに統一すると良いと思います．",
            },
            {
                index: "各ページの作成",
                body: "各ページの構成は各々に任せたいと思います．一覧ページやサンプルページにあるコンポーネントを使用したり，新たにコンポーネントを追加したりしてもらえればと思います．\nTailwind CSSを用いており，utility classを指定することでCSSを用いずに各要素を装飾できます．",
            },
            {
                index: "product.tsについて",
                body: "プロダクトの情報をここに記述してください．各コンポーネントではproductを渡すことで，このファイルを参照して内容を表示しています．",
            },
            {
                index: "画像等について",
                body: "ここでは，画像等はパスを指定して読み込んでいるため，場所や名称は問いませんが，以下の要領で追加してください．\n各プロダクトの画像はimages/products/{プロダクト名}/に追加してください．ロゴなどの画像がMiakksのDrive等にない場合は教えてください．\n使用技術については，必要なものを適宜images/techIconsに追加してください．",
            },
            {
                index: "その他",
                body: "何か，不明点や改善点あれば教えてください．",
            },
        ],
        icon: "/images/products/Sample/sample_icon.png",
        logo: "/images/products/Sample/sample_logo.png",
        images: [
            "/images/products/Sample/sample_image (1).png",
            "/images/products/Sample/sample_image (2).png",
            "/images/products/Sample/sample_image (3).png",
        ],
        techIcons: [
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
        ],
    },
    {
        slug: "AIoLite_Advance",
        name: "アイオライト アドバンス",
        genre: "iOS Android",
        concept: "いつでも、どこでも、気軽に質問できる「あなた専用のAI家庭教師」",
        abstract: "いつでもどこでも気軽に質問できる「あなた専用のAI家庭教師『AIoLite』」。あなたが答えを出せるようAI家庭教師が導きます。質問後にはあなたにぴったりの類題も提示します。",
        description: [
            {
                index: "1 「解くだけ」にしない",
                body: "解いた後、すぐにAIがポイント解説！\n「つまづきポイント」や「正しい解き方」など、あなた専用のフィードバックを自動で整理！\nこれまでのフィードバックは一覧に保存され、テスト前の復習に最適！",
            },
            {
                index: "2 「次の勉強」につなげる",
                body: "解いた後に、AIがあなたに合った類題を生成！\nあなた専用の問題に挑戦！\n統計でどれだけ問題を解いたか確認！\n努力が可視化されて、モチベーションにつながる！\n選んだ類題には、すぐに挑戦できる！",
            },
            {
                index: "3 「手軽に」取り組める工夫",
                body: "自動で文章を読み取ることも写真をそのまま送ることも可能！\n写真を撮るだけで、簡単に問題を送信！よく使う文字や単位は専用の入力ボタンを用意！\n数式や単位をボタンで簡単に打てる！",
            },
            {
                index: "4 情報系大学生が作ったアプリ",
                body: "最近の勉強事情を知っている現役大学生が開発！\nAIを学ぶ大学生が制作！ AIに触れる第一歩としてもオススメ！",
            },
        ],
        icon: "/images/products/AIoLite_Advance/Icon.png",
        logo: "/images/products/AIoLite_Advance/AIoLite_text_black.png",
        images: [
            "/images/products/AIoLite_Advance/Home.png",
            "/images/products/AIoLite_Advance/QInput1.PNG",
            "/images/products/AIoLite_Advance/QInput2.PNG",
            "/images/products/AIoLite_Advance/chat.PNG",
            "/images/products/AIoLite_Advance/Feedback.PNG",
            "/images/products/AIoLite_Advance/SameQ.PNG",
            "/images/products/AIoLite_Advance/Total.PNG",

        ],
        techIcons: [
            "/images/techIcons/Flutter.png",
            "/images/techIcons/firebase.png",
            "/images/techIcons/Gemini.png",
            "/images/techIcons/Pinecone.webp",
            "/images/techIcons/python.png",
            "/images/techIcons/SQLite.png",
            "/images/techIcons/FastAPI.svg",
        ],
    },
    {
        slug: "AIoLite_Basic",
        name: "アイオライト ベーシック",
        genre: "対応機種",
        concept: "コンセプト",
        abstract: "概要",
        description: [
            {
                index: "見出し",
                body: "本文",
            },
        ],
        icon: "/images/products/window.svg",
        logo: "/images/products/AIoLite_Basic/AIoLite_text_white.png",
        images: [
            "/images/products/window.svg",
            "/images/products/window.svg",
            "/images/products/window.svg",
        ],
        techIcons: [
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
        ],
    },
    {
        slug: "Jeturbo",
        name: "ジェッターボ",
        genre: "対応機種",
        concept: "コンセプト",
        abstract: "概要",
        description: [
            {
                index: "見出し",
                body: "本文",
            },
        ],
        icon: "/images/products/window.svg",
        logo: "/images/products/window.svg",
        images: [
            "/images/products/window.svg",
            "/images/products/window.svg",
            "/images/products/window.svg",
        ],
        techIcons: [
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
        ],
    },
    {
        slug: "sustainable_honeybees_park_project_web",
        name: "サステナハニー公園プロジェクトWeb",
        genre: "対応機種",
        concept: "コンセプト",
        abstract: "概要",
        description: [
            {
                index: "見出し",
                body: "本文",
            },
        ],
        icon: "/images/products/window.svg",
        logo: "/images/products/window.svg",
        images: [
            "/images/products/window.svg",
            "/images/products/window.svg",
            "/images/products/window.svg",
        ],
        techIcons: [
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
        ],
    },
    {
        slug: "bunkatsu",
        name: "ブン喝ッ！",
        genre: "対応機種",
        concept: "コンセプト",
        abstract: "概要",
        description: [
            {
                index: "見出し",
                body: "本文",
            },
        ],
        icon: "/images/products/window.svg",
        logo: "/images/products/window.svg",
        images: [
            "/images/products/window.svg",
            "/images/products/window.svg",
            "/images/products/window.svg",
        ],
        techIcons: [
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
            "/images/techIcons/github-mark.svg",
        ],
    },
];
