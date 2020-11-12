import { FaFire } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Button } from "./Button"
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'

export const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">Расценки</h1>
                        <div className="pricing__container">
                            <Link to='/sign-up' className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Начальный</h3>
                                    <h4>$9.99</h4>
                                    <p>в месяц</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Транзакций</li>
                                        <li>2% Кэшбэк</li>
                                        <li>$10,000 Лимит</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Выбрать план
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Золотой</h3>
                                    <h4>$29.99</h4>
                                    <p>в месяц</p>
                                    <ul className='pricing__container-features'>
                                        <li>1000 Транзакций</li>
                                        <li>3.5% Кэшбэк</li>
                                        <li>$100,000 Лимит</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Выбрать план
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <GiCrystalize />
                                    </div>
                                    <h3>Алмазный</h3>
                                    <h4>$99.99</h4>
                                    <p>в месяц</p>
                                    <ul className='pricing__container-features'>
                                        <li>Неограниченные транзакции</li>
                                        <li>5% Кэшбэк</li>
                                        <li>Неограниченный лимит</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Выбрать план
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}