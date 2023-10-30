const server = "http://localhost:8080"

export async function getUser(id) {
    const res = await fetch(`${server}/v1/user/${id}`);
    return await res.json();
}