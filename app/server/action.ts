"use server"

export const retreive_todos = async () => {
    // const response = await fetch("http://127.0.0.1:8000/api/todos", {
        const response = await fetch("https://nextjs-fastapi-practice.vercel.app/api/todos", {
        cache: "no-store"
    })
    const result = await response.json()
    return result 
}

export const addTodo = async (todo: string) => {
    console.log("Server Action", todo)

    // const url = await fetch("http://127.0.0.1:8000/api/todos", {
        const url = await fetch("https://nextjs-fastapi-practice.vercel.app/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todo })

    })

    const response = await url.json()
    console.log("response", response)

}