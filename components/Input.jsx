export default function Input(props) {
	return (
		<input 
			type={props.type || 'text'}
			className="
				px-[20px] 
				py-[8px] 
				rounded-[8px] 
				border-[2px] 
				border-slate-300 
			" 
			placeholder={props.placeholder}
			value={props.value} 
			onChange={props.onChange} 
			checked={props.checked}
			required={props.required}
			minLength={props.minLength}
			maxLength={props.maxLength}
		/>
	)
}