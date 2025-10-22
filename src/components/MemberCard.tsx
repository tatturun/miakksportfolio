// components/MemberCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Member } from "@/data/member";
import { GoArrowRight } from "react-icons/go";

interface MemberCardProps {
    member: Member & { color?: string };
}

export default function MemberCard({ member }: MemberCardProps) {
    const borderColor = member.color || "slate-900";

    return (
        <Link
            href={`/members/${member.slug}`}
            className="block w-1/2 md:w-1/3 p-2 mx-4 group"
        >
            <div
                className="parallelogram-container relative bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 border-4 aspect-[3/4]"
                style={{ borderColor: borderColor }}
            >
                <div className="parallelogram-content absolute inset-0 z-10">
                    <Image
                        src={member.avatarUrl || "/images/members/glove.svg"}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="parallelogram-content absolute inset-0 flex flex-col justify-end p-4 bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-20 z-20">
                    <h3
                        className="text-xl font-bold mt-1 text-shadow-lg/70 text-shadow-slate-800"
                        style={{ color: borderColor }}
                    >
                        {member.role}
                    </h3>
                    <h2
                        className="text-3xl font-bold leading-none text-shadow-lg/70 text-shadow-slate-800"
                        style={{ color: borderColor }}
                    >
                        {member.name}
                    </h2>
                </div>
                <div className="flex justify-end mt-auto">
                    <GoArrowRight className="h-8 w-8 text-white transition-colors m-4 duration-200 group-hover:text-yellow-400 z-20" />
                </div>
            </div>
        </Link>
    );
}
