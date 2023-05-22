import { Link, useParams } from 'react-router-dom'
import Logo from '../img/logo-group.svg'
import '../../Burger.css'
import { useState } from 'react'

function Header () {
    const [styleBtn, setStyleBtn]= useState('menu-btn ')
    const [styleMenu, setStyleMenu]= useState('header-navigation')
    const [menuClick, setManuClick] = useState(false)
    const navigation = [
        {id: 1, title: 'Квести', link:'qests'},
        {id: 2, title: 'Новачкам', link:'beginners'},
        {id: 3, title: 'Відгуки', link:'reviews'},
        {id: 4, title: 'Акції', link:'shares'},
        {id: 5, title: 'Контакти', link:'contacts'},
    ]
    function clickMenu(){
        if(!menuClick){
            setStyleBtn('menu-btn menu-btn-active');
            setStyleMenu('b-menu-active  block')
            setManuClick(true)
        } else{
            setStyleBtn('menu-btn ');
            setStyleMenu('header-navigation')
            setManuClick(false)
        }
      };
    return (
        <div className='header flex-row'>
            <div className="header-menu">
                <div className="menu-logo">
                    <img src={Logo} alt='logo' />
                </div>
            </div>
            <a href='#' className={styleBtn} onClick={clickMenu}>
                <span className='menu-btn-burger'></span>
            </a>
            <div className={styleMenu}>
                <nav className='navigation-container'>
                    {
                        navigation.map(link => (
                            <Link to={`/${link.link}`}  key={link.id}><li className='navigation-link'>{link.title}</li></Link>
                        ))
                    }
                </nav>
                
            </div>
            <a href="tel:8-800-333-55-99" className='menu-tel'>8 (800) 333-55-99</a>
        </div>    
    )
}
export default Header