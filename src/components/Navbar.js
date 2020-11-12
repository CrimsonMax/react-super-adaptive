import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

export const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobilMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className="navbar-logo" onClick={closeMobilMenu}>
                            <MdFingerprint className="navbar-icon" />
                            MAXIS
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobilMenu}>
                                    Главная
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobilMenu}>
                                    Услуги
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className="nav-links" onClick={closeMobilMenu}>
                                    Продукты
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/sign-up' className="btn-link">
                                        <Button buttonStyle="btn--outline">
                                            Войти
                                        </Button>
                                    </Link>
                                ) : (
                                        <Link to='/sign-up' className="btn-link" onClick={closeMobilMenu}>
                                            <Button buttonStyle="btn--outline"
                                                buttonSize="btn--mobile"
                                            >
                                                Войти
                                            </Button>
                                        </Link>
                                    )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}