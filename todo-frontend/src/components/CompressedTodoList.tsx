import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TodoListModel } from '../Models/TodoListModel'
import { TbTrash } from 'react-icons/tb';

type Props = {
    todoList: TodoListModel
}

const CompressedTodoList:FC<Props> = ({todoList}) => {

    const navigate = useNavigate();
    const [checkBoxState, setCheckBoxState] = useState(false);

    const deletionStatus = () => {
        if (!todoList.todoListDeleted) {
            return "Active";
        }
        else {
            return "Deleted";
        }
    }

    function handleGotoButtonClick() {
        navigate(`/TodoList/${todoList.todoListId}`);
    }

    function handleCheckBoxClick() {
        setCheckBoxState(!checkBoxState);
        console.log(checkBoxState);
    }

    function handleDeleteIconClick() {
        console.log(`You deleted list #${todoList.todoListId}`);
    }

  return (
    <div className="m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 border-b border-gray-500 cursor-pointer "
        >
        <div className="grid grid-cols-11 gap-4">
            <label>
            Complete: <input type="checkbox" checked={checkBoxState} onChange={handleCheckBoxClick}/>
            </label>
            {/* <div className="col-span-1">{todoList.todoListId}</div> */}
            <div className="col-span-3">{todoList.todoListName}</div>
            <div className="col-span-3">{todoList.todoListDesc}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2" onClick={handleGotoButtonClick}>Go to list.</button>
            <div className="col-span-1 content-center" onClick={handleDeleteIconClick}><TbTrash /></div>
            <div className="col-span-1">{deletionStatus()}</div>
        </div>
    </div>
  )
}

export default CompressedTodoList