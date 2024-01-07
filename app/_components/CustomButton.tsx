"use client"

import React from "react"

const CustomButton = () => {

    const testClick = () => {
        alert('button clicked!')
    }

    return (
        <>
            <button onClick={ testClick } type="button">Click</button>
        </>
    )
    
}

export default CustomButton
