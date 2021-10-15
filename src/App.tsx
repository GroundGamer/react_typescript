import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import UserPage from "./components/UserPage/UserPage";
import TaskPage from "./components/TaskPage/TaskPage";
import UserItemPage from "./components/UserPage/UserItem/UserItemPage/UserItemPage";
import TaskItemPage from "./components/TaskPage/TaskItem/TaskItemPage/TaskItemPage";

function App() {
	
	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to='/users'>Пользователи</NavLink>
					<NavLink to='/tasks'>Список задач</NavLink>
				</div>
				<Route path={'/users'} exact>
					<UserPage/>
				</Route>
				<Route path={'/users/:id'} exact>
					<UserItemPage/>
				</Route>
				<Route path={'/tasks'} exact>
					<TaskPage/>
				</Route>
				<Route path={'/tasks/:id'} exact>
					<TaskItemPage/>
				</Route>
			</div>
		</BrowserRouter>
	);
}

export default App;
