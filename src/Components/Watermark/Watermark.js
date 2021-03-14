import React from 'react'
import gitsalahcalllogo from '../../Icons/logo.svg'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={gitsalahcalllogo} alt="Cuckoo Logo"/>
            <span className="logoText">Gitsalahcall</span>
        </div>
    )
}

export default Watermark