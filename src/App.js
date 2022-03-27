import Routing from "./component/Routing/Routing";
import { BrowserRouter } from "react-router-dom";
import './App.scss'
import { AuthState } from "./component/Context/AuthState";

function App() {
  return (
 <div className="App">
   <AuthState>
   <BrowserRouter>
 <Routing/>
 </BrowserRouter>
   </AuthState>

 
 </div>
  );
}

export default App;
