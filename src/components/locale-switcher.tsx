'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { GlobeIcon } from "@radix-ui/react-icons"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';


export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    // const localActive = useLocale();
    const path = usePathname()
    // console.log(path);

    const urls = path.split("/")
    // console.log((urls.length > 2) ? urls.slice(2).join("/") : "");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='w-12 h-12'>
                    <GlobeIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all " />
                    <span className="sr-only">Switch Locale</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => {
                    // const forward = `/en/` + (urls.length > 2) ? urls.slice(2).join("/") : ""
                    urls[1] = "en"
                    startTransition(() => {
                        router.replace(urls.join("/"));
                    });
                }}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    // const forward = `/vi/` + (urls.length > 2) ? urls.slice(2).join("/") : ""

                    startTransition(() => {
                        urls[1] = "vi"
                        startTransition(() => {
                            router.replace(urls.join("/"));
                        });
                    });
                }}>
                    Tiếng Việt
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>


    );
}