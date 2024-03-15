"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import TableProjects from "../../../components/TableProject";
import { useTranslations } from "next-intl";

type ProjectType = {
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

export default function Home() {
    // const t = useTranslations('Index');
    const router = useRouter()
    // unstable_setRequestLocale(locale);
    const ac = typeof window !== 'undefined' ? localStorage.getItem('__ac') : false
    const [data, setData] = useState<{
        count: number,
        results: ProjectType[]
    }>()
    const getProjects = async () => {
        const res = await fetch('https://frontend-exam.digitalfortress.dev/projects', {
            cache: "no-cache",
            method: "GET",
            headers: {
                Authorization: `Bearer ${ac}`,

            }
        })
        const data: {
            count: number,
            results: ProjectType[]
        } = await res.json()
        setData(data);
    }
    useEffect(() => {
        getProjects()
    }, [])
    useEffect(() => {
        if (!ac) {
            router.push(`/`,)
        }
    }, [ac])
    return (
        <>
            {
                data &&
                <TableProjects data={data.results} />
            }
        </>
    );
}
