// components/LogoCard.tsx
import Image from "next/image";
import styles from "../app/(main)/members/members.module.css";

export default function LogoCard() {
    return (
        <div className="block flex-1 w-full md:min-w-0 p-2">
            <div
                className={`
                    ${styles.paralogo} 
                    relative bg-slate-200/80 to-transparent transition-opacity duration-300 z-20 
                    aspect-[3/5] 
                `}
            >
                {/* 画像エリア */}
                <div className={`${styles.paralogo} absolute inset-0 z-10`}>
                    <Image
                        src="/images/illust_t.png"
                        alt="Group Logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "contain", padding: "2rem" }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
