import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { GoMail } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";

import {
  FaFacebookSquare,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

// Assets
import Logo from "../Assets/logo2.png";
import Logo1 from "../Assets/logo-1.png";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <img
        src={Logo}
        className="header__left-icon"
        alt="2"
      />
      <img
        src={Logo1}
        className="header__right-icon"
        alt="2"
      />

      <Container>
        <div className="header__up">
          <div className="header__up__up">
            <p>
              <GoMail /> <span>agroholding_kg@gmail.com</span>
            </p>
            <p>
              <BiPhoneCall /> <span>+996 999 000 196</span>
            </p>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
          </div> */}

          <div className="header__up__down">
            <div className="icon_wrapper">
              <FaFacebookSquare />
            </div>
            <div className="icon_wrapper">
              <FaTwitter />
            </div>
            <div className="icon_wrapper">
              <FaInstagram />
            </div>
            <div className="icon_wrapper">
              <FaDribbble />
            </div>
          </div>
        </div>

        <div className="header__down">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto gggg mx-auto">
                  <LinkContainer to="/agrikol-landing-page">
                    <Nav.Link>Главная</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/agrikol-landing-page/services">
                    <Nav.Link>Сервисы</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/agrikol-landing-page/ourprojects">
                    <Nav.Link>Наши проекты</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/agrikol-landing-page/shop">
                    <Nav.Link>Магазин</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/agrikol-landing-page/pages">
                    <Nav.Link>Страницы</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/agrikol-landing-page/news">
                    <Nav.Link>Новости</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/agrikol-landing-page/contact">
                    <Nav.Link>Контакты</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default Header;
