import React from 'react'
import { getTodoLists } from '../dummy-data'
import CompressedTodoList from './CompressedTodoList';

const HomepageTodoListView = () => {

    let todoLists = getTodoLists();

  return (
    <div className="box-border min-h-fit p-4 border-4  w-3/4 rounded-xl">
        <div className="flex justify-center">
                <div className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {todoLists.map((todoList) => (
                        <CompressedTodoList todoList={todoList} />
                    ))}
            </div>
        </div>
    </div>
  )
}



export default HomepageTodoListView