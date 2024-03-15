import { DataTable } from "./table/data-table";
import { Payment, columns } from "./table/column"
export default function TableProjects({ data }: { data: Payment[] }) {

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}