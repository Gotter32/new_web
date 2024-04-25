import React from "react"
import { Routes, Route } from 'react-router-dom'
import { Lab2 } from '../pages/Lab2'
import { Lab3 } from '../pages/Lab3'
import { Lab4 } from '../pages/Lab4'
import { Lab5 } from '../pages/Lab5'
import './style.css'

const Content = () => {
    return (
        <div className="content_main">
            <div className="routs">
                <Routes>
                    <Route path='/Lab2' element={<Lab2 />} />
                    <Route path='/Lab3' element={<Lab3 />} />
                    <Route path='/Lab4' element={<Lab4 />} />
                    <Route path='/Lab5' element={<Lab5 />} />
                </Routes>
            </div>
        </div>
    )
}
export default Content