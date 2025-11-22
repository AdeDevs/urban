import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import HomePage from "./components/Home";

export default function App() { 
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage/>} />
      </Routes>
    </div>
  )
}