// MembersPage.tsx

import { members } from "@/data/member";
import MemberCard from "@/components/MemberCard";
import styles from "./members.module.css";

export default function MembersPage() {
    return (
        <div className="max-w-7xl mx-auto mb-8">
            {/* タイトル */}
            <h1 className="text-5xl font-bold text-center m-16">MEMBERS</h1>

            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                {members.map((member) => (
                    // カードコンポーネントを配置
                    <MemberCard key={member.slug} member={member} />
                ))}
            </div>
        </div>
    );
}
