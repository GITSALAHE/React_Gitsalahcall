import React from 'react'
import gitsalahcalllogo from '../../Icons/logo.svg'
import GitHubButton from 'react-github-btn'
import '../Navigation/Navigation.css'

const Navigation = () => {
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={gitsalahcalllogo} alt="Cuckoo Logo"/>
                                </div>
                                <div className="logoText">
                                    Gitsalahcall
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="githubStar">
                    <GitHubButton href="https://github.com/GITSALAHE/Gitsalahcall_WEBRTC_REACT_NODEJS" 
                            data-color-scheme="no-preference: light; light: light; dark: dark;" 
                            data-icon="octicon-star" data-size="large" data-show-count="true" 
                            aria-label="Star gitsalahe/Gitsalahcall_WEBRTC_REACT_NODEJS on GitHub"
                    >
                    Star
                    </GitHubButton>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation