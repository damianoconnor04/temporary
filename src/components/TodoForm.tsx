import React from "react";
import { MdAddTask } from "react-icons/md";

export default function TodoForm() {
	const [tasks, setTasks] = React.useState<string[]>([]);
	const [newTodo, setNewTodo] = React.useState<string>("");

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (newTodo.trim() !== "") {
			setTasks((prevTasks) => [...prevTasks, newTodo]);
			setNewTodo("");
		}
	};
	const handleDeleteTask = (event: React.MouseEvent<HTMLButtonElement>) => {
		const taskToDelete = event.currentTarget.parentElement?.id;
		if (taskToDelete) {
			setTasks((prevTasks) =>
				prevTasks.filter((task) => task !== taskToDelete)
			);
		}
	};

	return (
		<form className="mt-4" onSubmit={handleFormSubmit}>
			<div className="flex flex-col items-center gap-2">
				<input
					type="text"
					className="w-full border-b border-indigo-300 focus:outline-none focus-within:border-indigo-500 transition"
					placeholder="Add a new task..."
					value={newTodo}
					onChange={(event) => setNewTodo(event.target.value)}
				/>
				<button
					type="submit"
					className="bg-indigo-400 hover:bg-indigo-500 disabled:bg-gray-400 text-white px-4 py-2 rounded-md w-full transtiion flex items-center justify-center gap-2 text-lg font-medium"
				>
					<MdAddTask className="text-xl" />
					Create task
				</button>
			</div>
			<ul className="mt-6">
				{tasks.map((todo, index) => (
					<li
						id={todo}
						key={index}
						className="flex items-center justify-between border-b border-indigo-300/50 py-2"
					>
						<span>{todo}</span>
						<button
							onClick={handleDeleteTask}
							className="text-red-500"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</form>
	);
}
