// MembersPage.tsx

import { members } from "@/data/member";
import MemberCard from "@/components/MemberCard";
import LogoCard from "@/components/LogoCard";

export default function MembersPage() {
    return (
        <div className="max-w-7xl mx-auto mb-8">
            {/* タイトル */}
            <h1 className="text-5xl font-bold text-center m-16">MEMBERS</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 justify-center items-center w-3/5 mx-auto">
                <LogoCard />
                {members.map((member) => (
                    // カードコンポーネントを配置
                    <MemberCard key={member.slug} member={member} />
                ))}
            </div>
        </div>
    );
}
