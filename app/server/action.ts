"use server"

export const retreive_todos = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/todos", {
        cache: "no-store"
    })
    const result = await response.json()
    return result 
}

export const addTodo = async (todo: string) => {
    console.log("Server Action", todo)

    const url = await fetch("http://127.0.0.1:8000/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todo })
    })

    const response = await url.json()
    console.log("response", response)
}

export const deleteTodo = async (id:string) => {
    console.log("Server DELETE ID",id)

    const url = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id })
    })  

    const response = await url.json()
    console.log("DELETE RESPONSE", response)
}