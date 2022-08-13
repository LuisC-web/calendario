import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import { ProviderDelCalendario } from "./ProviderDelCalendario";
import "./styles/App.css";
import "./styles/nomarlize.css";
function App() {
	return (
		<ProviderDelCalendario>

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
					<Route path="*" element={<Error404></Error404>}>
					</Route> 
				</Routes>
			</BrowserRouter>
		</ProviderDelCalendario>
	);
}

export default App;
