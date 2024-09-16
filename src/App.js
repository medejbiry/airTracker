import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Header from "./components/Header"
import './App.css';
import Home from "./components/Home";
import Result from "./components/Result.jsx"

function App() {
  return (
    <div className="body">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
