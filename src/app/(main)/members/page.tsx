import { members } from '@/data/member';
import Link from 'next/link';

export default function MembersPage() {
  return (
    <div>
      <h2>メンバー一覧</h2>
      <ul>
        {members.map((member) => (
          <li key={member.slug}>
            <Link href={`/members/${member.slug}`}>
              {member.name} - {member.role}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}