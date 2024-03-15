"use client"

import { ModeToggle } from "@/components/ModeToggle"
import LocalSwitcher from '@/components/locale-switcher'
import { Separator } from "./ui/separator"
import { useRouter } from "next/navigation"
import { useTranslations, NextIntlClientProvider } from 'next-intl';

export default function Header() {
    const ac = typeof window !== "undefined" ? window.localStorage.getItem('__ac') : false;
    const router = useRouter()
    const t = useTranslations('Header');

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
                                router.push("/")
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

