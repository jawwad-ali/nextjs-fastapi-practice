from pydantic import BaseModel

# Todo Model
class TodoItem(BaseModel):
    id:int|str
    title:str
    completed:bool

# Todo Create
class TodoCreate(BaseModel):
    title: str
