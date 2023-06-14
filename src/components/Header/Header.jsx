import React from 'react'
import './header.scss'
import { Navbar, Nav, Container } from 'react-bootstrap';
import akk from '../../assets/header-akk.svg'
import sharetel from '../../assets/share-tel.png'
import shareloc from '../../assets/share-loc.png'
import sharefc from '../../assets/share-fc.png'
import shareins from '../../assets/share-inst.png'
import headLogo from '../../assets/heade-logo.png'


const Header = () => {
    return (
        <Navbar className='navbarr' bg="light" expand="lg">
          <Container className='Container__nav'>
            <div className="head__top">
            <div className="nav__logo">
              <img src={headLogo} alt="" />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav__toggler'/>
            </div>
            <Navbar.Collapse id="basic-navbar-nav"  className='de'>
              <Nav className="ms-start">
                <div className="akk">
                    <img src={akk} alt="" />
                    <h2>Войти в аккаунт</h2>
                </div>
                <div className="line"></div>
                <hr />
                <div className="desci">
                    <ul>
                        <li>
                            <h3>Акции</h3>
                            <h3>О компании</h3>
                            <h3></h3>
                            <h3>Пользовательское соглашение</h3>
                            <h3>Условия гарантии</h3>
                            <h3>Ресторан</h3>
                            <h3>Контакты</h3>
                            <h3>Поддержка</h3>
                            <h3>Отследить заказ</h3>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="share">
                    <h3><img src={sharetel}alt="" />+7 (926) 223-10-11</h3>
                    <h3><img src={shareloc} alt="" />Москва, ул. Юных Ленинцев, д.99</h3>
                    <ul>
                        <li>
                            <img src={sharefc} alt="" />
                            <p>Facebok</p>
                        </li>
                        <li>
                            <img src={shareins} alt="" />
                            <p>Instagram</p>
                        </li>
                    </ul>
                </div>
                <hr />  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header