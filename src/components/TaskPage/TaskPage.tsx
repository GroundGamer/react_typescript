import React, {FC, useEffect, useState} from 'react';
import List from "../List/List";
import {ITodo} from "../../types/types";
import TaskItem from "./TaskItem/TaskItem";
import axios from "axios";

const TaskPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])
	
	useEffect(() => {
		fetchTodos()
	}, [])
	
	async function fetchTodos() {
		try{
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=10')
			setTodos(response.data)
		}
		catch (e) {
			alert(e)
		}
	}
	return (
		<List items={todos} renderItem={(todo: ITodo) => <TaskItem todo={todo} key={todo.id}/>}/>
	);
};

export default TaskPage;