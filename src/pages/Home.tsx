import React from "react";
import TodoForm from "../components/TodoForm";

export default function Home() {
	return (
		<div className="grid place-items-center h-full">
			<div className="bg-white max-w-lg w-full min-h-96 rounded-lg shadow-xl shadow-black/25 border border-indigo-300/50 py-6 px-4 overflow-hidden">
				<div className="overflow-y-auto">
					<h1 className="text-3xl font-bold font-poppins text-neutral-700 text-center">
						Todo App
					</h1>
					<TodoForm />
				</div>
			</div>
		</div>
	);
}
