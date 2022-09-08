import React, { FC, useEffect, useState } from 'react'
import { TbTrash } from 'react-icons/tb'
import { useFetch } from '../Hooks/useFetch'
import BASE_PATH from '../utils/getRequests'
import { SubTask, TodoTask } from '../utils/todoTypes'
import CompressedSubTask from './CompressedSubTask'

type Props = {
    task: TodoTask
}

const CompressedTask:FC<Props> = ({task}) => {
    
    const [checkBoxState, setCheckBoxState] = useState(false);
    const [subTaskShowState, setSubTaskShowState] = useState(false);

    const {data, loading, error} = useFetch<SubTask[]>({url: `${BASE_PATH}/subtasks/${task.todoTaskId}`});

    useEffect(() => {
        
    },[])

    function handleCheckBoxClick() {
        setCheckBoxState(!checkBoxState);
        console.log(checkBoxState);
        // If checkbox is checked, then all subtasks should be set to completed
        // and vice versa
    }

    const handleDeleteIconClick = async () => {
        const result = await confirm(`Are you sure you want to delete ${task.taskName} (Id: ${task.todoTaskId})?`);
        if (result) {
          console.log("Deletion confirmed");
          return;
        }
        console.log("Deletion cancelled");
      };

    const handleEditButtonClick = () => {
        // Open task modal
        console.log("Opening task modal");
        
    }

    const handleTaskClick = () => {
        // Fold out subtasks
        console.log("Fold out subtasks");
        console.log(data);
        
        setSubTaskShowState(!subTaskShowState);
        console.log(subTaskShowState);
        
    }

    return (
        <div className="m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200 border-b border-gray-500 cursor-pointer ">
            <div className='flex w-full items-center'>
                <div className='w-28'>Complete: <input type="checkbox" checked={checkBoxState} onChange={handleCheckBoxClick}/></div>
                <div className='flex flex-1 items-center w-12' onClick={handleTaskClick}>
                    <div className='w-1/2'>{task.taskName}</div>
                    <div className='w-1/2'>{task.taskDesc}</div>
                </div>
                <div className='w-20'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-1" onClick={handleEditButtonClick}>Edit task</button>
                </div>
                <div className='w-8' onClick={handleDeleteIconClick}><TbTrash size={35}/></div>
            </div>
            <div className='ml-6'>
                {subTaskShowState && data?.map((subTask) => (
                    <CompressedSubTask subTask={subTask} />
                ))}
                
            </div>
        </div>
        
        // subtasks der skal renderes conditionelt på baggrund af showsubtask state
    )
}

export default CompressedTask