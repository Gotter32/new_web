import React from "react"
import './style.css'
import { Link } from 'react-router-dom'
const Listlabs = () => {
    return (
        <div className="Listlabs_main">
            <h2>Это список лабораторных работ</h2>
            <ul>
                <li><Link to="/Lab2">2 лабораторная</Link></li>
                <li><Link to="/Lab3">3 лабораторная</Link></li>
                <li><Link to="/Lab4">4 лабораторная</Link></li>
                <li><Link to="/Lab5">5 лабораторная</Link></li>
                
            </ul>
        </div>
    )
}
export default Listlabs