// components/MemberCard.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "../app/(main)/members/members.module.css";
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
            className="block flex-1 w-full md:min-w-0 p-2 group"
        >
            <div
                // 修正: シングルクォートを削除し、テンプレートリテラルを正しく記述
                className={`${styles.paracontainer} relative bg-slate-200 shadow-lg border-4 aspect-[3/5]`}
                style={{ borderColor: borderColor }}
            >
                {/* 背景画像エリア */}
                <div className={`${styles.paracontent} absolute inset-0 z-10`}>
                    <Image
                        src={member.avatarUrl || "/images/members/glove.svg"}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        priority={false}
                    />
                </div>

                {/* テキストエリア */}
                <div
                    className={`${styles.paracontent} absolute inset-0 flex flex-col justify-end p-3 md:p-6 bg-gradient-to-t from-slate-800/50 to-transparent transition-opacity duration-300 z-20`}
                >
                    <h3
                        className="text-sm md:text-xl font-bold mt-1 text-slate-100"
                        style={{ textShadow: `2px 2px 4px ${borderColor}` }}
                    >
                        {member.role}
                    </h3>
                    <h2
                        className="text-xl md:text-3xl font-bold leading-none text-white"
                        style={{ textShadow: `2px 2px 4px ${borderColor}` }}
                    >
                        {member.name}
                    </h2>
                </div>
                <div className="flex justify-end mt-auto">
                    <GoArrowRight className="h-auto w-auto text-white transition-colors m-4 duration-200 group-hover:text-sky-200 z-20" />
                </div>
            </div>
        </Link>
    );
}
