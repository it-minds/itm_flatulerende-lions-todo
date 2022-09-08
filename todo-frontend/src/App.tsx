import { useState } from "react";
import "./index.css";
import reactLogo from "./assets/react.svg";
import Modal from "./components/UI/Modal";
import { Link } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="app-root">
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
				<button onClick={() => setModalOpen(true)}>Open Modal!</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more - Heeeeeej
			</p>
			<Modal
				isOpen={modalOpen}
				onClose={() => {
					console.log("closing modal");
					setModalOpen(false);
				}}
				className="fade"
			>
				<h1></h1>
			</Modal>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</div>
	);
}

export default App;
