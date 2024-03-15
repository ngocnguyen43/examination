"use client"
import { ModeToggle } from "./ModeToggle"
import LocalSwitcher from '@/components/locale-switcher'
import { Separator } from "./ui/separator"
import { useRouter } from "next/navigation"
import { useTranslations, } from 'next-intl';
import { v4 } from "uuid"

export default function Header() {
    const ac = typeof window !== "undefined" ? window.localStorage.getItem('__ac') : false;
    console.log(ac);

    let key = v4()
    const router = useRouter()
    const h = useTranslations("Header")
    const t = useTranslations("Theme")
    return (
        < >
            <div className="w-full flex items-center justify-between h-[10%] p-16 py-8" key={key}>
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
                                    key = v4()
                                    router.refresh()
                                }}>{h("logout")}</a>
                            </h4>
                        </>
                            : null
                    }
                </div>
                <div className="flex h-full basis-[30%] items-center gap-4 justify-end">
                    <ModeToggle dark={t("dark")} light={t("light")} system={t("system")} />
                    <LocalSwitcher />
                </div>
            </div>
        </>
    )
}
