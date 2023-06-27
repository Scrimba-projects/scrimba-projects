import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prev => !prev);
    }
    console.log(darkMode)
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}