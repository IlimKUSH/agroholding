import React from 'react'
import {Container, Image, Nav, Navbar} from 'react-bootstrap'
import {GoMail} from 'react-icons/go'
import {BiPhoneCall} from 'react-icons/bi'

import {
  FaFacebookSquare,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa'

// Assets
import Logo from '../Assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {BiCart} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <div className='header__up'>
          <div className='header__up__up'>
            <p>
              <GoMail /> <span>needhelp@tripo.com</span>
            </p>
            <p>
              <BiPhoneCall /> <span>666 888 0000</span>
            </p>
          </div>
          <div className='header__up__middle'>
            <LinkContainer to='/agrikol-landing-page'>
              <Image src={Logo} />
            </LinkContainer>
          </div>

          <div className='header__up__down'>
            <div className='icon_wrapper'>
              <FaFacebookSquare />
            </div>
            <div className='icon_wrapper'>
              <FaTwitter />
            </div>
            <div className='icon_wrapper'>
              <FaInstagram />
            </div>
            <div className='icon_wrapper'>
              <FaDribbble />
            </div>
          </div>
        </div>
        <div className='header__down'>
          <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
            <Container>
              <BsSearch className='search__icon nav__icon' />
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='m-auto gggg mx-auto'>
                  <LinkContainer to='/agrikol-landing-page'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/agrikol-landing-page/services'>
                    <Nav.Link>Services</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/agrikol-landing-page/ourprojects'>
                    <Nav.Link>Our Projects</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/agrikol-landing-page/shop'>
                    <Nav.Link>Shop</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/agrikol-landing-page/pages'>
                    <Nav.Link>Pages</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/agrikol-landing-page/news'>
                    <Nav.Link>News</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/agrikol-landing-page/contact'>
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
              <Nav.Link>
                <BiCart className='cart_icon nav__icon' />
              </Nav.Link>
            </Container>
          </Navbar>
        </div>
      </Container>
    </div>
  )
}

export default Header
