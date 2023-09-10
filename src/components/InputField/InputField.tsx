import React, { useRef } from "react";
import "./styles.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
	// Uma utilidade de definir o tipo de elemento HTML sendo utilizado, ele auxilia na hora de utilizar funções específicas da tag, como por exemplo o current? que tá sendo utilizado no onSubmit do form
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className="input"
			// Faz isso aqui pra quando a pessoa apertar enter, sumir com o foco, é uma boa dica e guarde pra mais coisas
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="input"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Digite uma tarefa"
				className="input__box"
			/>
			<button className="input__submit" type="submit">
				Add
			</button>
		</form>
	);
};
