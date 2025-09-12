import{BrowserRouter,Routes,Route}from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import Login from "./pages/Login";
//import Listproduct from "./pages/Listproduct";
import './App.css'
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Manage" element={<Manage/>} />
      {/* <Route path="/listproduct" element={<Listproduct/>} /> */}
      </Routes></BrowserRouter>
      </>

  )
}
export default App;