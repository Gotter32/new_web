import React from "react"
import { useState } from 'react'
import '../components/style.css'
import Buttons from "../components/Buttons"

const Lab3 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="buttons">
                <h2>Тут было сделано свои кнопки-компоненты и ссылки-навигацию</h2>
                <Buttons onClick={() => setCount((count) => count + 1)}>
                    Счётчик {count}
                </Buttons>
                <Buttons onClick={() => alert("Hello world")}>
                    alert
                </Buttons>
            </div>
            <p>
                Кнопки
            </p>
        </div>
    )
}
export default Lab3