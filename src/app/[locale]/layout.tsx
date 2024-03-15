import { Inter } from "next/font/google";
import Header from "../../components/Header";
import "../globals.css"
import { ThemeProvider } from "next-themes";
import { cn } from "../../lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
// Can be imported from a shared config
const locales = ['en', 'vi'];


// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }
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
  const messages = useMessages()
  return <>
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased ",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>

        </ThemeProvider></body>
    </html>
    {/* <Header />
    {children} */}
  </>;
}