// app/mvv/[slug]/page.tsx

import { mvvData } from '@/data/mvv';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

// ビルド時に動的なパスを静的に生成する
export async function generateStaticParams() {
  // idを持つデータのみを対象にする (Valueは対象外)
  return mvvData
    .filter((item) => item.id)
    .map((item) => ({
      slug: item.id,
    }));
}

export default async function MvvDetailPage({ params }: Props) {
  const mvvItem = mvvData.find((item) => item.id === params.slug);

  if (!mvvItem) {
    notFound(); // データが見つからない場合は404ページを表示
  }

  return (
    <div style={{ paddingTop: '100px', padding: '2rem' }}>
      <h1>{mvvItem.title}</h1>
      {/* subtitleが存在する場合のみ表示 */}
      {mvvItem.subtitle && <p style={{ fontSize: '1.5rem', whiteSpace: 'pre-line' }}>{mvvItem.subtitle}</p>}
      
      {/* descriptionが存在する場合のみ表示 */}
      {mvvItem.description && <p style={{ whiteSpace: 'pre-line' }}>{mvvItem.description}</p>}
      
      {/* items(Value)が存在する場合のみ表示 */}
      {mvvItem.items && (
        <ul>
          {mvvItem.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}