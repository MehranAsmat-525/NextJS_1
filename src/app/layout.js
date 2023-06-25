import Header from "@/component/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Mehran Asmat",
    description: "Created by Mehran Asmat",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
