import { members } from "@/data/member";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    FaGithub,
    FaTwitter,
    FaGlobe,
    FaPenNib,
    FaExternalLinkAlt,
    FaCertificate,
    FaArrowLeft,
} from "react-icons/fa";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    return members.map((member) => ({
        slug: member.slug,
    }));
}

export default async function MemberDetailPage({ params }: Props) {
    const { slug } = await params;
    const member = members.find((m) => m.slug === slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="w-full min-h-screen bg-slate-50 pb-20">
            {/* ヘッダーセクション */}
            <div
                className="w-full h-64 relative flex items-center justify-center"
                style={{
                    background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}05 100%)`,
                }}
            >
                <Link
                    href="/members"
                    className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/40 hover:bg-white/80 backdrop-blur-sm rounded-full text-slate-700 transition-all duration-300 hover:shadow-md group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="group-hover:-translate-x-1 transition-transform duration-200 font-bold text-sm">
                        BACK
                    </span>
                </Link>
                <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/80"
                    style={{ backgroundColor: member.color }}
                ></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10">
                {/* プロフィールメイン情報 */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden">
                    {/* アイコン画像 */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-slate-200">
                        <Image
                            src={member.avatarUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 名前と役職 */}
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                        {member.name}
                    </h1>
                    <div className="flex flex-wrap gap-2 justify-center items-center mb-6">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs md:text-sm font-medium">
                            {member.role}
                        </span>
                        {member.subRole && (
                            <span
                                className="px-3 py-1 text-white rounded-full text-xs md:text-sm font-medium"
                                style={{ backgroundColor: member.color }}
                            >
                                {member.subRole}
                            </span>
                        )}
                    </div>

                    {/* 自己紹介 */}
                    <p className="text-slate-600 leading-relaxed max-w-2xl mb-4 text-sm md:text-base">
                        {member.bio}
                    </p>

                    {/* SNSリンク（右下にこっそり配置） */}
                    {member.socials && (
                        <div className="flex gap-3 mt-4 md:absolute md:bottom-6 md:right-8 justify-center w-full md:w-auto">
                            {member.socials.github && (
                                <SocialLink
                                    href={member.socials.github}
                                    icon={<FaGithub />}
                                />
                            )}
                            {member.socials.twitter && (
                                <SocialLink
                                    href={member.socials.twitter}
                                    icon={<FaTwitter />}
                                />
                            )}
                            {member.socials.qiita && (
                                <SocialLink
                                    href={member.socials.qiita}
                                    icon={<FaPenNib />}
                                />
                            )}
                            {member.socials.portfolio && (
                                <SocialLink
                                    href={member.socials.portfolio}
                                    icon={<FaGlobe />}
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* 詳細情報の2カラムレイアウト */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* 左カラム：Skills と Certifications を縦に並べるためのコンテナ */}
                    <div className="space-y-6 flex flex-col h-full">
                        {/* Skills セクション */}
                        <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                                <span
                                    className="w-1.5 h-5 rounded-full mr-3"
                                    style={{ backgroundColor: member.color }}
                                ></span>
                                Skills
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {member.skills?.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                {(!member.skills ||
                                    member.skills.length === 0) && (
                                    <p className="text-slate-400 text-sm">
                                        No skills listed yet.
                                    </p>
                                )}
                            </div>
                        </section>

                        {/* Certifications セクション (修正版) */}
                        <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 flex-grow">
                            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                                <span
                                    className="w-1.5 h-5 rounded-full mr-3"
                                    style={{ backgroundColor: member.color }}
                                ></span>
                                Certifications
                            </h2>
                            <div className="space-y-4">
                                {member.certifications?.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <FaCertificate className="text-slate-300 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-xs font-bold text-slate-400 block mb-0.5">
                                                {cert.date}
                                            </span>
                                            {cert.url ? (
                                                <a
                                                    href={cert.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-1.5 text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors leading-snug"
                                                >
                                                    <span className="group-hover:underline decoration-blue-600/50 underline-offset-4">
                                                        {cert.name}
                                                    </span>
                                                    <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-blue-500 mb-0.5" />
                                                </a>
                                            ) : (
                                                <span className="text-slate-700 text-sm font-medium leading-snug">
                                                    {cert.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {(!member.certifications ||
                                    member.certifications.length === 0) && (
                                    <p className="text-slate-400 text-sm">
                                        No certifications listed yet.
                                    </p>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* 右カラム：経歴 */}
                    <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 h-full">
                        <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                            <span
                                className="w-1.5 h-5 rounded-full mr-3"
                                style={{ backgroundColor: member.color }}
                            ></span>
                            History
                        </h2>
                        <div className="space-y-6">
                            {member.history?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 items-start relative"
                                >
                                    {/* タイムラインの線 */}
                                    {index !== member.history!.length - 1 && (
                                        <div className="absolute left-[4.5px] top-2 bottom-[-24px] w-px bg-slate-200"></div>
                                    )}
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mt-1.5 shrink-0 relative z-10"></div>

                                    <div className="flex-1">
                                        {" "}
                                        {/* flex-1を追加して幅を確保 */}
                                        <span className="text-xs font-semibold text-slate-400 block mb-0.5">
                                            {item.date}
                                        </span>
                                        {item.url ? (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-1.5 text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors leading-snug"
                                            >
                                                <span className="group-hover:underline decoration-blue-600/50 underline-offset-4">
                                                    {item.title}
                                                </span>
                                                {/* 小さな証拠リンクアイコン */}
                                                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-blue-500 mb-0.5" />
                                            </a>
                                        ) : (
                                            <span className="text-slate-700 text-sm font-medium block leading-snug">
                                                {item.title}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {(!member.history ||
                                member.history.length === 0) && (
                                <p className="text-slate-400 text-sm">
                                    No history listed yet.
                                </p>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

// 控えめなSNSリンクコンポーネント
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
        >
            {icon}
        </a>
    );
}
