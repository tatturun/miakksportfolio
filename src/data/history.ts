export interface HistoryItem {
    id: string;
    date: string;
    title: string;
    description: string;
    imageUrl?: string; // 画像がある場合
}

export const historyData: HistoryItem[] = [
    {
        id: "0",
        date: "2025.01",
        title: "「Miakks」結成",
        description:
            "　大学で得た知識を実践的なスキルへと昇華させるため、同学部のメンバーで結成。Web・モバイル・ゲームなど多岐にわたる開発を行い、アウトプットを通じた「実践知」の蓄積を目標に掲げました。互いに切磋琢磨しながら成長していく、挑戦の日々がここから始まりました。",
        imageUrl: "/images/banner_t.png",
    },
    {
        id: "20250315",
        date: "2025.02 - 2025.03",
        title: "Open Hack U 2025 OSAKA 「AIoLite」",
        description:
            "　チームとして初めてのハッカソンへの挑戦！ AIとのチャット形式での学習サポートアプリ「AIoLite」を開発しました。",
        imageUrl: "/images/history/hacku_osaka.png",
    },
    {
        id: "20250329",
        date: "2025.03",
        title: "Flutter Jr ハッカソン 「ブン喝ッ!!」 MVP賞",
        description:
            "　提示されたペルソナの課題を解決するアプリを一週間で作るハッカソンに挑戦。AIによる分割睡眠スケジュールの提示+オカンのボケに対してツッコんで止めるアラームアプリで、MVP賞を受賞しました！",
        imageUrl: "/images/history/flutterjr.png",
    },
    {
        id: "20250511",
        date: "2025.04 - 2025.05",
        title: "技育博 2025 Vol.2 「AIoLite」 サイバーエージェント賞 CARTA HOLDINGS賞",
        description:
            "　学習サポートアプリ「AIoLite」に、画像入力やフィードバックなど学習に役立つ機能を新規追加！　2つの企業賞を受賞しました！",
        imageUrl: "/images/history/geekhaku.jpg",
    },
    {
        id: "20250516",
        date: "2025.02 - 2025.05",
        title: "サステナハニー公園プロジェクト Webページ 完成",
        description:
            "株式会社デンソーが行う持続可能な社会を目指す取り組みの一環として、名城大学の学生主体のコミュニティが看板デザインの制作を担当したサステナハニー公園プロジェクト。その想いをつづるWEBサイトをMiakksが制作しました。",
        imageUrl:
            "/images/products/Sustainable_honeybees_park_project_web/SHPP_header3.png",
    },
    {
        id: "20250810",
        date: "2025.08",
        title: "AICON -ゲームと生成AIで未来をつくろう- 出展",
        description:
            "　イオンモールナゴヤドーム前にて開催されたイベントに「AIoLite」を出展しました。実際に子供たちに使ってもらい、アンケートを実施しました。子供たちや保護者の方から頂いた意見をもとに、その後の改善を行いました。",
        imageUrl: "/images/history/aicon.jpg",
    },
    {
        id: "20250920",
        date: "2025.06 - 2025.09",
        title: "技育CAMPキャラバン 「ジェッターボ」",
        description:
            "チーム初のUnityによるゲーム作品。リリースに向け、様々な企業の方からアドバイスをいただきました。",
        imageUrl: "/images/products/Jeturbo/Jeturbo-window5.png",
    },
    {
        id: "20251109",
        date: "2025.11",
        title: "Re;Build in 愛知 2025 「AIoLite ベーシック/アドバンス」 最優秀賞",
        description:
            "「AIoLite ベーシック」と連携する見守りアプリを作成し、最優秀賞を受賞しました。",
    },
    {
        id: "20251130",
        date: "2025.11",
        title: "技育展 2025 「AIoLite アドバンス」 ウイングアーク1st賞",
        description:
            "　ユーザー目線での改善を重ねてきた「AIoLite」。性能の向上やUIの改善を経て、本当に学習に役立つアプリへと進化してきました。これまでの開発が実を結び、企業賞を受賞しました。",
        imageUrl: "/images/history/geekten.jpg",
    },
];
