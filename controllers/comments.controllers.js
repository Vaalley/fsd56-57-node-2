export function getAllComments(request, response) {
    const comments = [
        {
            id: "1",
            content: "abc",
        },
        {
            id: "2",
            content: "def",
        },
    ];
    return response.send(comments);
}
