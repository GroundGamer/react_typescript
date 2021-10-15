import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}
	
	const clickHandler = () => {
		console.log(value)
		console.log(inputRef.current?.value)
	}
	
	const dragHandler = () => {
		console.log('DRAG')
	}
	
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}
	
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}
	
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('DROP')
	}
	
	return (
		<div>
			<input value={value} onChange={changeHandler} type="text" placeholder='Управляемый поиск...'/>
			<input ref={inputRef} type="text" placeholder='Не управляемый поиск...'/>
			<button onClick={clickHandler}>Кнопка</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{width: '200px', height: '200px', background: '#ff4f4f'}}/>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{
					width: '200px',
					height: '200px',
					background: isDrag ? 'blueviolet' : '#ff4f4f',
					marginTop: 15
				}}/>
		</div>
	);
};

export default EventsExample;