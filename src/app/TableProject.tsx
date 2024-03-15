import { DataTable } from "../components/table/data-table";
import { Payment, columns } from "../components/table/column"
export default function TableProjects({ data }: { data: Payment[] }) {

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}