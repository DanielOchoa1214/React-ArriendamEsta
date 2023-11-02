const server = "http://localhost:8080"

export async function getUser(id) {
    const res = await fetch(`${server}/v1/user/${id}`);
    return await res.json();
}

export async function createUser(data) {
    const res = await fetch(`${server}/v1/user`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}