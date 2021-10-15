import React, {FC} from 'react';
import {ITodo} from "../../../types/types";

interface TaskItemProps{
	todo: ITodo;
}

const TaskItem: FC<TaskItemProps> = ({todo}) => {
	return (
		<div>
			<input type="checkbox" checked={todo.completed}/>
			{todo.id}. {todo.title}
		</div>
	);
};

export default TaskItem;