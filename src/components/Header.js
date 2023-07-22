import React from 'react'
import image from "../images/apple-touch-icon.png";

export default function header() {
    return (
        <>
            <div className='header'>
                <img src={image} alt='logo' width='45' height='40'/>
                <h2> Google Notes</h2>
            </div>
        </>
    )
}
