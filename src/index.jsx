import "@/plugins";

import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

import HomePage from "@/app/pages/home";
import ItemsPage from "@/app/pages/items";
import SignInPage from "@/app/pages/signin";
import SignUpPage from "@/app/pages/signup";
import AddItemPage from "@/app/pages/additem";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/items" element={<ItemsPage/>}/>
				<Route path="/signin" element={<SignInPage/>}/>
				<Route path="/signup" element={<SignUpPage/>}/>
				<Route path="/additem" element={<AddItemPage/>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
