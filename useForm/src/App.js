import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./SignUp";
import Login from "./Login"
import Home from "./Home"


export default function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/register" element={<SignUp/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </>
    );
}