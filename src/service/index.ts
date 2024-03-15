export async function getAllProjects() {
    const ac = localStorage.getItem("__ac")

    const res = await fetch('https://frontend-exam.digitalfortress.dev/projects', {
        headers: {
            Authorization: `Bearer ${ac}`,
        }
    })

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}