const server = "http://localhost:8080"

export async function createPetitionForUser(aceptedValue, contentValue, authorid, propertyid){
    const res = await fetch(`${server}/v1/petition`, {
    method : 'POST',
    headers: {
            'Content-Type': 'application/json',
            },
    body : JSON.stringify({id : "P"+propertyid+"A"+authorid,
            acepted : aceptedValue,
            content : contentValue,
            authorId : authorid,
            propertyId : propertyid
            }),
    });
    return await res.json();
}

export async function getPetitionsFromUser(userId) {
    const res = await fetch(`${server}/v1/petition?ownerId=${userId}`);
    return await res.json();
}

export async function getPetitionstoUser(userId) {
    const res = await fetch(`${server}/v1/petition?authorId=${userId}`);
    return await res.json();
}

export async function updatePetitionStatus(userId, status){
    const res = await fetch(`${server}/v1/petition/updateStatus/${userId}/${status}`, 
    {method : 'PUT',
    headers: {
            'Content-Type': 'application/json',
            },});
    return await res.json();
}