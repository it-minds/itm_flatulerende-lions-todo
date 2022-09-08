import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TodoListModel } from '../Models/TodoListModel'

type Props = {
    todoList: TodoListModel
}

const CompressedTodoList:FC<Props> = ({todoList}) => {

    const navigate = useNavigate();

    const deletionStatus = () => {
        if (!todoList.todoListDeleted) {
            return "Active";
        }
        else {
            return "Deleted";
        }
    }

    function handleClick() {
        navigate(`/TodoList/${todoList.todoListId}`);
    }

  return (
    <div className="m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 border-b border-gray-500 cursor-pointer "
        onClick={handleClick}>
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-1">{todoList.todoListId}</div>
            <div className="col-span-3">{todoList.todoListName}</div>
            <div className="col-span-3">{todoList.todoListDesc}</div>
            <div className="col-span-1">{deletionStatus()}</div>
        </div>
    </div>
  )
}

export default CompressedTodoList