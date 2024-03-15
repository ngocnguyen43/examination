"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

export type ColumnName = {
    "id": number,
    "project_name": string,
    "project_domain": "string",
    "last_accessed": "string",
    "license_use":
    {
        "license_type": "string",
        "libraries": []
    }[]
}

export const columns: ColumnDef<ColumnName>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="!p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "project_name",
        header: ({ column }) => {
            const t = useTranslations("Table")
            return (
                <Button
                    variant="ghost"
                    className="!p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    {t("name")}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "project_domain",
        header: () => {
            const t = useTranslations("Table")
            return (
                <>
                    {t("domain")}
                </>
            )
        },
    },
    {
        accessorKey: "last_accessed",
        header: ({ column }) => {
            const t = useTranslations("Table")
            return (
                <Button
                    variant="ghost"
                    className="!p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    {t("access")}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
]
