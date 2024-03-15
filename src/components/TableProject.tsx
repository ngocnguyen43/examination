import { DataTable } from "./table/data-table";
import { ColumnName, columns } from "./table/column"
import { useTranslations } from "next-intl";
import { useMemo } from "react";
export default function TableProjects({ data }: { data: ColumnName[] }) {
    const memoriedColumns = useMemo(() => columns, [])

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={memoriedColumns} data={data} />
        </div>
    )
}