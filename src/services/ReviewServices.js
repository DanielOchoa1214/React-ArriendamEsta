const server = "http://localhost:8080"

export async function getReviewsFromUser(userId) {
    const res = await fetch(`${server}/v1/review/user/${userId}`);
    return await res.json();
}

export async function getReviewsFromProperty(propertyId) {
    const res = await fetch(`${server}/v1/review/property/${propertyId}`);
    return await res.json();
}

export async function getReviews(target, id) {
    const res = await fetch(`${server}/v1/review/${target}/${id}`);
    return await res.json();
}