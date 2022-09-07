import React, { FC } from 'react'
import { TodoListModel } from '../Models/TodoListModel'

type Props = {
    todoList: TodoListModel
}

const CompressedTodoList:FC<Props> = ({todoList}) => {
  return (
    <button aria-current="true" type="button" className="py-2 px-4 w-full font-medium text-left text-black bg-zinc-100 rounded-lg border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
        {todoList.todoListName}
    </button>
  )
}

export default CompressedTodoList