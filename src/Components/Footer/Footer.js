import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                <div className="disclaimer">
                   Please allow access to video and audio.<br/>
                
                </div>
                <div className="self">
                    Made with <span role='img' aria-label='heart-emoji'>❤️</span> by <a href="https://github.com/GITSALAHE" target="_blank" rel="noopener noreferrer">SALAHEDDINE BOUANBA (GITSALAH)</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer