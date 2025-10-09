import { ReactNode } from 'react';

// このレイアウトは(main)グループ内のページに適用される
export default function MainLayout({ children }: { children: ReactNode }) {
  // ここに(main)グループ専用のコンテナやスタイルを適用できる
  return <div className="main-container">{children}</div>;
}