import React, { FC, useEffect, useState } from 'react'
import { TbTrash } from 'react-icons/tb'
import { SubTask } from '../utils/todoTypes'

type Props = {
    subTask: SubTask
}

const CompressedSubTask:FC<Props> = ({subTask}) => {

    const [checkBoxState, setCheckBoxState] = useState(false);

    function handleCheckBoxClick() {
        setCheckBoxState(!checkBoxState);
        console.log(checkBoxState);
        // If checkbox is checked, then all subtasks should be set to completed
        // and vice versa
    }

    const handleDeleteIconClick = async () => {
        const result = await confirm(`Are you sure you want to delete ${subTask.subName} (Id: ${subTask.subTaskId})?`);
        if (result) {
          console.log("Deletion confirmed");
          return;
        }
        console.log("Deletion cancelled");
      };

    return (
        <div className="m-1 py-2 px-4 font-medium text-left text-black rounded-lg bg-blue-200 hover:bg-blue-400 border-b border-gray-500 cursor-pointer ">
            <div className='flex w-full items-center'>
                <div className='w-28'>Complete: <input type="checkbox" checked={checkBoxState} onChange={handleCheckBoxClick}/></div>
                <div className='flex flex-1 items-center w-12'>
                    <div className='w-1/2'>{subTask.subName}</div>
                    <div className='w-1/2'>{subTask.subDesc}</div>
                </div>
                <div className='w-8' onClick={handleDeleteIconClick}><TbTrash size={35}/></div>
            </div>
        </div>
    )
}

export default CompressedSubTask