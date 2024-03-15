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
type Props = {
    promise: Promise<ProjectType[]>
}
export default async function Projects({ promise }: Props) {
    const projects = await promise

    const content = projects.map(p => {
        return (
            <article key={p.id}>
                <h2>{p.last_accessed}</h2>
                <p>{p.project_domain}</p>
                <br />
            </article>
        )
    })

    return content
}