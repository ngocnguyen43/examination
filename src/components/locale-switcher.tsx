'use client';

import { useRouter } from 'next/navigation';
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

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                    <span className="sr-only">Switch Locale</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => {
                    startTransition(() => {
                        router.replace(`/en`);
                    });
                }}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    startTransition(() => {
                        router.replace(`/vi`);
                    });
                }}>
                    Tieng Viet
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>


    );
}