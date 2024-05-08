import { StockOverView} from "./pages/StockOverview";
import { StockDetails } from "./pages/StockDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StockOverView />} />
				<Route path="/details" element={<StockDetails/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
