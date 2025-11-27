import { useState, useEffect } from "react"
import flag from "../assets/ng.png"

export default function NavBar() {
    const [searchActive, setSearchActive] = useState(false)
    const toggleSearch = () => {
        setSearchActive(!searchActive)
    }

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [showMenu]);
    return (
        <div>
            <nav className="nav-box">
                <div className="offers">
                    <div className="offers-content">
                        <span>get 50% off today only&nbsp;</span>
                        <span>get 50% off today only&nbsp;</span>
                        <span>get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                        <span id="hide">get 50% off today only&nbsp;</span>
                    </div>
                </div>
                <div className="nav-bar">
                    <h1 className="logo">urban</h1>
                    <ul className="desk-nav">
                        <a href="#" id="wmn">women</a>
                        <a href="#">men</a>
                        <a href="#">kids</a>
                        <a href="#">accessories</a>
                    </ul>
                    <ul className="nav-extras">
                        <input type="text" className={`srch-bar ${searchActive ? "active" : ""}`} />
                        <li onClick={toggleSearch}><ion-icon name="search-outline"></ion-icon></li>
                        <li><ion-icon name="bag-outline"></ion-icon></li>
                        <li><ion-icon name="person-outline"></ion-icon></li>
                        <li><span><img src={flag} alt="flag" /></span>NGN <span className="drop">▼</span></li>
                        <br />
                        <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                            <span className="first"></span>
                            <span className="second"></span>
                        </div>
                    </ul>

                    <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                        <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                            <span className="first"></span>
                            <span className="second"></span>
                        </div>
                        <a href="#">women</a>
                        <a href="#">men</a>
                        <a href="#">kids</a>
                        <a href="#">accessories</a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}