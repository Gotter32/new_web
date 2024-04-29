import React from "react"
import { useState } from 'react'
import '../components/comp.css'
import my_button from "../components/my_button"
import { Button } from "@mui/material"

const Lab3 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="buttons">
                <h2>Это Лаб 3</h2>
                <p>В ней нужно было сделать свои кнопки-компоненты и ссылки-навигацию</p>
                <my_button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </my_button>
                <my_button onClick={() => alert("Hello world")}>
                    Выводим alert
                </my_button>
                <Button variant="outlined">
                    Кнопка из MUI
                </Button>
            </div>
            <p>
                Это работающие кнопки
            </p>
        </div>
    )
}
export default Lab3