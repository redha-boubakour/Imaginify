import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Imaginify",
    description: "AI-powered image generator",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={cn("fontRoboto antialiased", roboto.variable)}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
