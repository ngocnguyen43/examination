import "./globals.css"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

import { cn } from "@/lib/utils"
import Header from "./Header";



export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased ",
                fontSans.variable
            )}>          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                    <Header />
                    {children}
                </ThemeProvider></body>
        </html>
    );
}
