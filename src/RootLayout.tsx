import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function RootLayout() {
	return (
		<div className="w-full h-full bg-indigo-100">
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}
