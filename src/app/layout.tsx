import { ReactNode } from "react";
import "./globals.css"; // グローバルCSSをインポート
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Background } from "@/components/Background";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja" className="overflow-x-hidden">
            <body className="relative min-h-screen w-full bg-gradient-to-br from-slate-100 to-slate-400 overflow-x-hidden">
                <Background />
                <Header />
                <main className="flex-grow pt-[80px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
