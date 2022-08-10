import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login></Login>}>
				</Route>
				<Route>
					<Route path='/register' element={<Register></Register>}></Route>
				</Route>
				<Route>
					<Route path="/home" element={<Home></Home>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
