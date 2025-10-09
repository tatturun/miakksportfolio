// プロダクトの型定義
export type Product = {
  slug: string;        // URLに使われる一意のID
  name: string;        // プロダクト名
  description: string; // プロダクトの説明
  imageUrl: string;    // 画像URL
};

// プロダクトデータの配列
export const products: Product[] = [
  {
    slug: 'product-a',
    name: 'プロダクトA',
    description: 'これはプロダクトAの素晴らしい説明文です。',
    imageUrl: '/images/products/vercel.svg',
  },
  {
    slug: 'product-b',
    name: 'プロダクトB',
    description: 'これはプロダクトBの魅力的な説明文です。',
    imageUrl: 'images/products/window.svg',
  },
];