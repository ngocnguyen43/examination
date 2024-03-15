"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel,
    getPaginationRowModel,
    PaginationState,
    getFilteredRowModel,
    ColumnFiltersState,


} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 4,
    })
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const t = useTranslations("Table")
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        state: {
            sorting,
            pagination,
            columnFilters,

        }
    })
    const nextPage = () => {
        if (table.getCanNextPage()) {
            table.nextPage();
            setPagination({
                ...pagination,
                pageIndex: pagination.pageIndex + 1
            });
        }
    };

    const prevPage = () => {
        if (table.getCanPreviousPage()) {
            table.previousPage();
            setPagination({
                ...pagination,
                pageIndex: pagination.pageIndex - 1
            });
        }
    };
    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder={t("filter")}
                    value={(table.getColumn("project_name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("project_name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <div className="flex items-center justify-end space-x-2 py-4 mx-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={prevPage}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {t("previous")}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={nextPage}
                        disabled={!table.getCanNextPage()}
                    >
                        {t("next")}
                    </Button>
                </div>
            </div>
        </div>
    )
}
