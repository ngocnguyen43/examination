"use client"

import { Column, ColumnDef, HeaderContext } from "@tanstack/react-table"
import { ArrowUpDown, } from "lucide-react"
import { Button } from "../ui/button"
import i18n, { useTranslations } from "next-intl"

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
const CustomButton = ({ column, name }: { column: Column<ColumnName, unknown>, name?: unknown }) => {
    const t = useTranslations("Table")
    return (
        <Button
            variant="ghost"
            className="!p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}

        >
            {name ? t(name) : "ID"}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
}
export const columns: ColumnDef<ColumnName>[] = [
    {
        accessorKey: "id",
        enableResizing: false,
        header: ({ column }) => {
            return (
                <CustomButton column={column} />
            )
        },
    },
    {
        accessorKey: "project_name",
        enableResizing: false,
        header: ({ column }) => {
            return (
                <CustomButton column={column} name={"name"} />

            )
        },
    },
    {
        accessorKey: "project_domain",
        enableResizing: false,
        header: ({ column }) => {
            return (
                <CustomButton column={column} name={"domain"} />
            )
        },
    },
    {
        accessorKey: "last_accessed",
        enableResizing: false,
        header: ({ column }) => {
            return (
                <CustomButton column={column} name={"access"} />
            )
        },
    },
]
