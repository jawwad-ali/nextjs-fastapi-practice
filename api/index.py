from fastapi import FastAPI

from models.type import TodoCreate,TodoItem 
from typing import List

app = FastAPI()

fakeTodos = [
    {"id":1 , "title":"Todo One" , "completed": False},
    { "id":2, "title": "Todo Two", "completed": False }
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
    new_todo = TodoItem( id= len(todos) + 1, title=todo.title , completed= False)
    todos.append(new_todo)
    return new_todo