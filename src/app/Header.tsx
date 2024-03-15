import { ModeToggle } from "./ModeToggle"
import LocalSwitcher from '@/components/locale-switcher'
import { Separator } from "../components/ui/separator"
import { redirect } from "next/navigation"
import { useTranslations, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';


export default async function Header() {
    const ac = typeof window !== "undefined" ? window.localStorage.getItem('__ac') : false;
    // const t = await getTranslations("Header")
    return (
        <div className="w-full flex items-center justify-between h-[10%] p-16 py-8">
            <div className="flex h-full basis-[70%] items-center gap-8 justify-start">
                {
                    ac ? <>
                        <h1 className="text-4xl font-bold"><a href="/" className="no-underline"> HOME </a></h1>
                        <Separator orientation="vertical" className="h-20" />
                        <h4 className="text-2xl">
                            <a href="/" className="no-underline" onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("__ac")
                                localStorage.removeItem("__rc")
                                redirect("/")
                            }}></a>
                        </h4>
                    </>
                        : null
                }
            </div>
            <div className="flex h-full basis-[30%] items-center gap-8 justify-end">
                <ModeToggle />
                <LocalSwitcher />
            </div>
        </div>
    )
}

