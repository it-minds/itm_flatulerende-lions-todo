import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import InvalidURLReroute from './components/InvalidURLReroute';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/TodoList" element={<TodoList />}>
          <Route path=":todoListId" element={<TodoList />} />
        </Route>
        <Route path="*" element={<InvalidURLReroute/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
