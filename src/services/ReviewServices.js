const server = "http://localhost:8080"

export async function getReviewsFromUser(userId) {
    const res = await fetch(`${server}/v1/review/user/${userId}`);
    return await res.json();
}