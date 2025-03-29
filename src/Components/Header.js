import { useState, useEffect, useCallback } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GoMail } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";

import Logo from "../Assets/logo2.png";
import Logo1 from "../Assets/logo-1.png";

const sections = [
  { id: "banner", label: "Главная" },
  { id: "our-goals", label: "Наши цели" },
  { id: "activity", label: "Деятельность" },
  { id: "export", label: "Экспорт" },
  { id: "plans", label: "Планы" },
  { id: "news", label: "Новости" },
  { id: "footer", label: "Контакты" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("banner");

  const handleScroll = useCallback(() => {
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveLink(section.id);
          break;
        }
      }
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="header">
      <img src={Logo} className="header__left-icon" alt="2" />
      <img src={Logo1} className="header__right-icon" alt="2" />

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
                  {sections.map((section) => (
                    <Nav.Link
                      key={section.id}
                      as={Link}
                      to={section.id}
                      smooth={true}
                      duration={500}
                      className={`clicable`}
                    >
                      {section.label}
                    </Nav.Link>
                  ))}
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