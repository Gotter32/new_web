import React from "react"

const Buttons = ({label, onClick}) => {
    return <button onClick={onClick}>{label}!</button>
}

export default Buttons