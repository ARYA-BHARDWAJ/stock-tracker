import { AutoComplete } from "../components/AutoComplete"
import logo from "../logo.jpg"

export const StockOverView = () =>{
    return <div className="bg-slate-950 h-screen">
    <h1 className="text-white text-center p-5">Stock Tracker</h1>
    <div class="flex justify-center items-center">
    <img className="h-48 w-96 tobject-contain m-5" src={logo} alt="image" />
    </div>
    
    <AutoComplete/>
    </div>
    
}
