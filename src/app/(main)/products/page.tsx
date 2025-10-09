import { products } from '@/data/product'; // プロダクトデータをインポート
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div>
      <h2>制作物一覧</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}