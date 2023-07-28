import Input from './Input'

export default function TodoItem(props) {
	console.log(props.data)
	return (
		<div className="
			flex 
			items-center 
			gap-[20px] 
			p-[20px] 
			border-b 
			border-slate-300 
			last:border-b-0
		">
			<Input 
				type="checkbox" 
				checked={props.data.end} 
				onChange={(e) => props.handleFinishTodo(e, props.data)}
			/>

			{props.data.end ? 
				<del>{props.data.text}</del> :
				<span>{props.data.text}</span>
			}

			<span 
				className="
					text-red-500 
					ml-auto 
					cursor-pointer
				" 
				onClick={() => props.handleDeleteTodo(props.data)}
			>
				Delete
			</span>
		</div>
	)
}