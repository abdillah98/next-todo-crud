import {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import TodoItem from '../components/TodoItem'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Todo() {

	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	const handleInputChange = (e) => {
	    setText(e.target.value);
	};

	const handleAddTodo = (e) => {
		e.preventDefault();

		if (text !== '') {
			const newTodo = {
				id: Date.now(),
				text: text,
				end: false,
			};

			setTodos([...todos, newTodo]);
			setText('');
		}
	};

	const handleFinishTodo = (e, row) => {
		console.log(todos.map(todo => todo))
		setTodos(todos.map(todo => 
			todo.id === row.id 
				? {...todo, end: e.target.checked}
				: todo
		));
	};

	const handleDeleteTodo = (row) => {
	    setTodos(todos.filter(todo => todo.id !== row.id));
	};

	return (
		<div className={`${inter.className} max-w-full md:max-w-lg mx-auto py-[40px] px-[20px]`}>
			<div className="text-[55px] font-[800]">Next - To Do List</div>
			
			<form onSubmit={handleAddTodo} className="flex items-center gap-[10px] py-[20px]">
				<Input 
					value={text}
					placeholder="New todo..."
					onChange={handleInputChange}
				/>
				<Button 
					type="submit"
					label="+ Add"
					// onClick={handleAddTodo}
				/>
			</form>

			{todos.length > 0 &&
				<div className="
					border 
					border-slate-300 
					rounded-[12px]
				">

					{todos.map(todo =>
						<TodoItem
							key={todo.id}
							data={todo}
							handleFinishTodo={handleFinishTodo}
							handleDeleteTodo={handleDeleteTodo}
						/>
					)}

				</div>
			}
		</div>
	)
}