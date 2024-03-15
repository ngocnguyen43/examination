"use client"

import { ModeToggle } from "../../components/ModeToggle"
import LocalSwitcher from "../../components/locale-switcher"

export default function Header() {
    return (
        <div className="w-full h-[30%]">
            <ModeToggle />
            <LocalSwitcher />
        </div>
    )
}

