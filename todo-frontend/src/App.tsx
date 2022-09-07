import { useState } from "react";
import "./index.css";
import reactLogo from "./assets/react.svg";
import {
	getSubTasks,
	getTasks,
	getTodo,
	getTodos,
	getTodoTasks,
} from "./utils/getRequests";
import {
	addSubTask,
	addTask,
	addTodoList,
	TEST_SUBTASK,
	TEST_TASK,
	TEST_TODO,
} from "./utils/postRequests";
import { updateSubTask, updateTask, updateTodoList } from "./utils/putRequests";
import { deleteTodoList } from "./utils/deleteRequest";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card bg-slate-200">
				<button onClick={() => deleteTodoList(4)}>Get Todos!</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
