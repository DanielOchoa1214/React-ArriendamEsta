const server = "http://localhost:8080"

export async function createPetitionForUser(petitionBody){
    const res = await fetch(`${server}/v1/petition`, 
    {method : 'POST',
    headers: {
            'Content-Type': 'application/json',
            },
    body : petitionBody});
    return await res.json();
}

export async function getPetitionsFromUser(userId) {
    const res = await fetch(`${server}/v1/petition?userPetitionId=${userId}`);
    return await res.json();
}