export async function getCats() {
    
    const res = await fetch("/api/cats")

    if (!res.ok) {
        throw {
            message: "Failed to fetch cats",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.cats
        
}