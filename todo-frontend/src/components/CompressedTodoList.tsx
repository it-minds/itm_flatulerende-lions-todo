import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TbTrash } from 'react-icons/tb';
import { TodoList } from '../utils/todoTypes';

type Props = {
    todoList: TodoList
}

const CompressedTodoList:FC<Props> = ({todoList}) => {

    const navigate = useNavigate();
    const [checkBoxState, setCheckBoxState] = useState(false);
    const completeOpacity: string = " opacity-25"
    function handleGotoButtonClick() {
        navigate(`/TodoList/${todoList.todoListId}`);
    }

    function handleCheckBoxClick() {
        setCheckBoxState(!checkBoxState);
        console.log(checkBoxState);
    }

    const handleDeleteIconClick = async () => {
        const result = await confirm(`Are you sure you want to delete ${todoList.todoListName} (Id: ${todoList.todoListId})?`);
        if (result) {
          console.log("Deletion confirmed");
          return;
        }
        console.log("Deletion cancelled");
      };

  return (
    <div className={`"m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 border-b border-gray-500 ${checkBoxState ? "opacity-50" : ""}`}
        >
        <div className="grid grid-cols-11 gap-4">
            <label className='col-span-2'>
                Complete: <input type="checkbox" checked={checkBoxState} onChange={handleCheckBoxClick}/>
            </label>
            <div className="col-span-3">{todoList.todoListName}</div>
            <div className="col-span-3">{todoList.todoListDesc}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2" onClick={handleGotoButtonClick}>Go to list</button>
            <div className="col-span-1 content-around ml-2 cursor-pointer" onClick={handleDeleteIconClick}><TbTrash size={35}/></div>
        </div>
    </div>
  )
}

export default CompressedTodoList