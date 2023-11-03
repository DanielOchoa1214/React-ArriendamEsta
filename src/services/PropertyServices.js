const server = "http://localhost:8080"

export async function getPropertiesFromUser(userId) {
    const res = await fetch(`${server}/v1/property?homeOwnerId=${userId}`);
    return await res.json();
}

export async function getProperties(filters) {
    let url = `${server}/v1/property?`;
    Object.keys(filters).forEach((key) => {
        if (filters[key]) {
            url += `${key}=${filters[key]}&`
        }
    });
    const res = await fetch(url);
    return await res.json();
};

export async function getPropertyById(propertyId){
    const res = await fetch(`${server}/v1/property/${propertyId}`);
    return await res.json();
}