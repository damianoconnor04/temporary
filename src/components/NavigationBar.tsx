import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
	const [activeTab, setActiveTab] = React.useState<string>("home");

	return (
		<div className="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 flex items-center bg-white/75 backdrop-blur-lg rounded-full border border-neutral-200/50 shadow-sm gap-6">
			<button
				onClick={() => setActiveTab("home")}
				className={`uppercase font-semibold font-poppins transition ${
					activeTab === "home"
						? "text-sky-600"
						: "text-neutral-400 hover:text-neutral-600"
				}`}
			>
				<Link to="/">Home</Link>
			</button>
			<button
				onClick={() => setActiveTab("about")}
				className={`uppercase font-semibold font-poppins transition ${
					activeTab === "about"
						? "text-sky-600"
						: "text-neutral-400 hover:text-neutral-600"
				}`}
			>
				<Link to="/about">About</Link>
			</button>
		</div>
	);
}
