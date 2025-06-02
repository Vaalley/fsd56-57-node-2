export function getAllPosts(request, response) {
    const posts = [
        {
            id: "uu5",
            content: "abc",
        },
        {
            id: "uu6",
            content: "def",
        },
    ];
    return response.send(posts);
}
