import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
import './styles.css'


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
        <div className="container">
            <Navbar />
            <Main />
        </div>    )
