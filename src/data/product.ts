// プロダクトの型定義
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
        concept: "あなた専用のAI家庭教師",
        abstract:
            "いつでもどこでも気軽に質問できる「あなた専用のAI家庭教師『AIoLite』」。あなたが答えを出せるようAI家庭教師が導きます。質問後にはあなたにぴったりの類題も提示します。",
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
            "/images/techIcons/fastapi.svg",
            "/images/techIcons/MLkit.png",
        ],
    },
    {
        slug: "AIoLite_Basic",
        name: "アイオライト ベーシック",
        genre: "iOS Android",
        concept: "小学生のためのAIせんせい",
        abstract:
            "「この勉強って、なんの役に立つの？」というお子さんの素朴な疑問に、ドキッとした経験はありませんか？学びと日常を結びつけ、子どもの「知りたい」という気持ちを育む、会話型のAI家庭教師アプリです。",
        description: [
            {
                index: "安心安全な学習環境",
                body: "小学生の目線に立ち、難しい言葉を使わずに会話します。また、勉強と関係のない話題や不適切な言葉へは進まないよう設計されています。保護者の方が見守る中、お子さまは安心して知的好奇心を探求できます。",
            },
            {
                index: "いつでも隣にいるAIせんせい",
                body: "わからない問題も、宿題のヒントも、AIせんせいがいつでも優しく教えてくれます。文字だけでなく、問題の写真を撮って画像やテキストをそのまま質問することもできるので、小さなお子さまでも直感的に使えます。",
            },
            {
                index: "学びと日常がつながる体験",
                body: "学校で習う知識が、暮らしの中でどう活かされているかをAIせんせいが具体的に教えてくれます。点と点だった知識が線でつながる瞬間、お子さまの目に「知るって面白い！」という輝きが生まれます。",
            },
            {
                index: "Flutterを使った理由",
                body: "単一のコードでiOSとAndroidの両方に対応できるクロスプラットフォーム開発が最大の魅力でした。これにより、開発効率を大幅に向上させると同時に、OSによる機能差やデザインのズレを最小限に抑えれました。",
            },
            {
                index: "Geminiを使った理由",
                body: "数あるAIモデルの中からGeminiを選んだのは、特定の役割（ペルソナ）になりきって自然な対話を行う能力に長けていたからです。「小学生の最高の友達であり、先生でもある」という『AIせんせい』のキャラクター設定を、Geminiは非常に高いレベルで実現してくれました。",
            },
            {
                index: "開発中苦労した点",
                body: "開発中、小学生に使ってもらったところ、大人目線では気づけないUI課題が明らかになりました。当初、数式入力やカメラでの質問機能が子どもには分かりづらく、専用の補助ボタンの設置や、次に何をすべきか視覚的に誘導するUIへと改良しました。",
            },
        ],
        icon: "/images/products/AIoLite_Basic/Icon.png",
        logo: "/images/products/AIoLite_Basic/AIoLite_text_white.png",
        images: [
            "/images/products/AIoLite_Basic/chat.jpeg",
            "/images/products/AIoLite_Basic/imageinput1.png",
            "/images/products/AIoLite_Basic/imageinput2.png",
            "/images/products/AIoLite_Basic/feedback.png",
        ],
        techIcons: [
            "/images/techIcons/Flutter.png",
            "/images/techIcons/firebase.png",
            "/images/techIcons/Gemini.png",
            "/images/techIcons/SQLite.png",
            "/images/techIcons/MLkit.png",
        ],
    },
    {
        slug: "Jeturbo",
        name: "ジェッターボ",
        genre: "PC",
        concept:
            "スピードで攻めるか、それともコーナーで差をつけるか！戦略性のある3Dレースゲーム",
        abstract:
            "最大6人で対戦できるターン制のオンライン空中レースゲーム。手札からレーンを選択して上下左右自由に配置し、ライバルよりも早くゴールを目指そう！",
        description: [
            {
                index: "遊び方1",
                body: "プレイヤー名を入力し、「ランダムマッチ」「プライベートマッチ」のいずれかで他のプレイヤーとマッチングします。プレイヤーが全員準備完了になったら、ゲームスタート！",
            },
            {
                index: "遊び方2",
                body: "まずは、固有スキルを持つ好きなキャラクターを選択しましょう。次に、マシンを選びましょう。どんどん加速するスピードタイプを選ぶか、コーナーで差をつけるカーブタイプを選ぶか、全てはあなた次第！",
            },
            {
                index: "遊び方3",
                body: "レース開始！「手札選択」と「方向選択」でレーンを配置！動けるマスの数やコース取りなど、よく考えてレーンを配置しましょう！そして、ライバルよりも早くゴールを目指そう！",
            },
            {
                index: "技術スタック",
                body: "ゲームエンジンはUnity、マルチプレイのネットワーク構築にはPhoton Fusionを使用しました。ゲーム内で登場するキャラクターなどはBlenderにて製作しました。",
            },
        ],
        icon: "/images/products/Jeturbo/Jeturbo_icon.png",
        logo: "/images/products/Jeturbo/Jeturbo_logo.png",
        images: [
            "/images/products/Jeturbo/Jeturbo-window1.png",
            "/images/products/Jeturbo/Jeturbo-window2.png",
            "/images/products/Jeturbo/Jeturbo-window3.png",
            "/images/products/Jeturbo/Jeturbo-window4.png",
            "/images/products/Jeturbo/Jeturbo-window5.png",
            "/images/products/Jeturbo/Jeturbo-window6.png",
        ],
        techIcons: [
            "/images/techIcons/unity.png",
            "/images/techIcons/photon.svg",
            "/images/techIcons/blender.png",
        ],
    },
    {
        slug: "sustainable_honeybees_park_project_web",
        name: "サステナハニー公園プロジェクトWeb",
        genre: "iOS Android",
        concept: "想いを形に。社会へつなぐ。",
        abstract:
            "サステナハニー公園プロジェクトは、環境教育と地域貢献を通じて持続可能な社会を目指す取り組みです。この看板はプロジェクトの理念を伝える役割を果たし、設置場所を取り巻く多様な人々が本プロジェクトに参加する後押しとなるような存在になることを目指しています。",
        description: [
            {
                index: "🌿サステナハニー公園プロジェクトとは",
                body:
                    "サステナハニー公園プロジェクトとは、環境教育と地域貢献を通じて持続可能な社会を目指す取り組みです。\n\n" +
                    "この活動の一環として、名城大学の学生主体のコミュニティであるチーム「VISION GUILD（VG)」と「もじもじ」が、プロジェクトの理念を伝える「サステナ看板」を制作しました。この看板は、多様な人々がプロジェクトに関心を持つきっかけとなることを目指しています。\n\n" +
                    "しかし、この一枚の看板アートには、ただ見るだけでは伝わりきらない――制作者の繊細な想いと物語 が込められていました。\n\n" +
                    "その物語を“語り部”として伝えるために、Webサイトを制作したのが私たち Miakks です。",
            },
            {
                index: "💡Webを通じて社会とつながる挑戦",
                body:
                    "私たちは「実践主義。」を理念に掲げ、大学で学んだプログラミング技術を現実の課題解決に活かすことを目指しています。今回のWebサイト制作は、学内で得た知識を社会に還元し、より多くの人々に想いを届けるための挑戦でした。\n\n" +
                    "サステナハニー公園プロジェクトに関わる人々の情熱や、看板に込められた想いを正しく、そして温かく伝えること。それが、私たちがこのWebサイトを制作した最大の目的です。\n\n" +
                    "また、Webという形を通じて、活動の魅力を広く発信し、環境や地域への関心を持つきっかけをつくることも目指しました。私たちにとってこのプロジェクトは、“技術で社会とつながるという理念を形にした実践の一歩です。",
            },
            {
                index: "🌱経験と学び",
                body:
                    "このプロジェクトは、私たちにとって非常に貴重な実践の場となりました。自分たちのアイデアを自由に形にするコンテストや授業とは異なり、今回は既に進行している活動に参加し、他の団体と協力しながら一つの成果物を完成させる必要がありました。これは技術力だけでは乗り越えられない挑戦でした。\n\n" +
                    "制作の過程では、デザインの意図や想いを正確に伝えるための表現方法を模索しました。単に「Webサイトをつくる」という作業ではなく、「伝える責任を持つ制作」であることを強く意識して作成をしました。\n\n" +
                    "この経験を通じて、私たちは単なる制作者ではなく、プロジェクトを共に創り上げる一員としての責任と喜びを学びました。",
            },
            {
                index: "✨おわりに",
                body:
                    "私たちMiakksにとって、このプロジェクトは技術を使って社会と向き合う貴重な一歩でした。制作を通じて感じた「想いを届けることの難しさ」は、これからの活動にも生きていく学びです。\n\n" +
                    "このページが、「サステナハニー公園プロジェクト」の魅力を一人でも多くの方に届き、皆さまがアートの世界に深く触れるきっかけとなることを、心から願っています。" +
                    "ぜひ、Webサイトを通してプロジェクトの物語を感じてみてください。\n\n" +
                    "詳しくはコチラ👇",
                link: {
                    url: "https://sustainable-honeybees-park-project.pages.dev",
                    text: "https://sustainable-honeybees-park-project.pages.dev",
                },
            },
        ],
        icon: "/images/products/Sustainable_honeybees_park_project_web/honeybees.png",
        logo: "/images/products/Sustainable_honeybees_park_project_web/SHPP_header3.png",
        images: [
            "/images/products/Sustainable_honeybees_park_project_web/sign.png",
            "/images/products/Sustainable_honeybees_park_project_web/picture-summary.png",
            "/images/products/Sustainable_honeybees_park_project_web/sign-detail.png",
            "/images/products/Sustainable_honeybees_park_project_web/picture.jpg",
        ],
        techIcons: [
            "/images/techIcons/html.png",
            "/images/techIcons/css.png",
            "/images/techIcons/javascript.png",
        ],
    },
    {
        slug: "Bunkatsu",
        name: "ブン喝ッ！！",
        genre: "ios Android",
        concept: "眠る時間のないアンタにブン喝ッ！！",
        abstract:
            "分割睡眠の自動スケジューリング・目覚ましアプリ。起こしてくるオカンにツッコミを入れることでアラームを停止します。",
        description: [
            {
                index: "分割睡眠のすすめ",
                body: "1日の睡眠を複数回に分けてとる分割睡眠は、まとまった睡眠時間を確保することができない忙しい人にとって有効な手段です。",
            },
            {
                index: "分割睡眠の自動スケジューリング",
                body: "アクティブタイムと目標睡眠時間を設定すると、自動的に分割睡眠スケジュールを作成します。分割には量子アニーリングのシミュレーションが可能なOpenJijライブラリを使用しており、超高速な組み合わせ計算を行っています。",
            },
            {
                index: "オカンのアラーム",
                body: "時間になるとオカンがボケをかましながら起こしてくれます。アラームを止めるには、「なんでやねん」と声に出してオカンにツッコミを入れてアラームを止めましょう！",
            },
        ],
        icon: "/images/products/Bunkatsu/Bunkatsu_icon.png",
        logo: "/images/products/Bunkatsu/Bunkatsu_logo.svg",
        images: [
            "/images/products/Bunkatsu/Bunkatsu_window3.png",
            "/images/products/Bunkatsu/Bunkatsu_window1.png",
            "/images/products/Bunkatsu/Bunkatsu_window2.png",
        ],
        techIcons: [
            "/images/techIcons/Flutter.png",
            "/images/techIcons/Gemini.png",
            "/images/techIcons/MLkit.png",
            "/images/techIcons/fastapi.svg",
            "/images/techIcons/python.png",
            "/images/techIcons/OpenJij.png",
            "/images/techIcons/VOICEVOX.png",
        ],
    },
    {
        slug: "others",
        name: "",
        genre: "",
        concept: "その他の制作物",
        abstract: "",
        description: [],
        icon: "/images/products/other_icons.png",
        logo: "",
        images: [],
        techIcons: [],
    },
];
