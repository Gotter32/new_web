import React from "react"
import './style.css'

const Buttons = ({label, onClick}) =>{
    return <button onClick={onClick}>{label}!</button>
}
export default Buttons