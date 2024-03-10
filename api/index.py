from fastapi import FastAPI
from models.type import TodoCreate,TodoItem 
from typing import List
import uuid

app = FastAPI()

fakeTodos = [
    { "id": "33c9f67f-e573-42fd-be1f-4ce6e9789900", "title": "Todo One", "completed": False},
    { "id": "e0e47770-19f5-4517-a225-ca6798035c2a", "title": "Todo Two", "completed": False } 
]

# Array holding the todos
# Convert dictionaries to TodoItem objects
todos: List[TodoItem] = [
    TodoItem(**todo_dict) for todo_dict in fakeTodos
]

@app.get('/api/todos')
def reterive_todos():
    return todos

@app.post("/api/todos") 
def create_todos(todo:TodoCreate):
    new_todo = TodoItem( id= str(uuid.uuid4()), title=todo.title , completed= False)
    todos.append(new_todo)
    return new_todo

@app.delete("/api/todos/{id}")
def delete_todos(id:str):
    for i, todo_item in enumerate(todos):
        if todo_item.id == id:
            del todos[i]
            return {"message": "Todo item deleted"}
    return {"error": "Todo item not found"}