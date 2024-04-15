import "plugins";

import React from "react";
import ReactDOM from "react-dom/client"
import * as ReactRouter from "react-router-dom";

import "./index.scss";

import HomePage from "app/pages/home";
import ItemsPage from "app/pages/items";
import SignInPage from "app/pages/signin";
import SignUpPage from "app/pages/signup";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ReactRouter.BrowserRouter>
			<ReactRouter.Routes>
				<ReactRouter.Route path="/" element={<HomePage/>}/>
				<ReactRouter.Route path="/items" element={<ItemsPage/>}/>
				<ReactRouter.Route path="/signin" element={<SignInPage/>}/>
				<ReactRouter.Route path="/signup" element={<SignUpPage/>}/>
			</ReactRouter.Routes>
		</ReactRouter.BrowserRouter>
	</React.StrictMode>
);
