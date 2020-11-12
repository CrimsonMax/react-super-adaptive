import './Footer.css'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Подпишись на нашу рассылку, что бы получать лучшие предложения!
        </p>
                <p className='footer-subscription-text'>
                От рассылок можно отписаться в любое время.
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Ваш Email'
                        />
                        <Button buttonStyle='btn--outline'>Подписка</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>О нас</h2>
                        <Link to='/sign-up'>Как этоработает</Link>
                        <Link to='/'>Рекомендации</Link>
                        <Link to='/'>Карьера</Link>
                        <Link to='/'>Инвесторам</Link>
                        <Link to='/'>Условия использования</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Связаться с нами</h2>
                        <Link to='/'>Контакты</Link>
                        <Link to='/'>Поддержка</Link>
                        <Link to='/'>Направления</Link>
                        <Link to='/'>Спонсорство</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Видео</h2>
                        <Link to='/'>Вступительное</Link>
                        <Link to='/'>Представительства</Link>
                        <Link to='/'>Агенство</Link>
                        <Link to='/'>Блог</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Социальные медиа</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <MdFingerprint className='navbar-icon' />
              MAXIS
            </Link>
                    </div>
                    <small className='website-rights'>MAXIS © 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to={'//ru-ru.facebook.com/DonaldTrump/'}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//www.instagram.com/buzova86/?hl=ru'}
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'}
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//twitter.com/sashagrey'}
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//recrut.mil.ru/career/conscription.htm'}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}