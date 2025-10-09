import { members } from '@/data/member';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

// ビルド時に動的なパスを静的に生成する
export async function generateStaticParams() {
  return members.map((member) => ({
    slug: member.slug,
  }));
}

export default async function MemberDetailPage({ params }: Props) {
  const member = members.find((m) => m.slug === params.slug);

  if (!member) {
    notFound(); // プロダクトが見つからない場合は404ページを表示
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
      <Image src={member.avatarUrl} alt={member.name} width={600} height={400} />
    </div>
  );
}