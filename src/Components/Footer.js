import React from 'react'
import {v4 as uuid} from 'uuid'
import {
  FaFacebookSquare,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa'
import {Col, Container, Image, Row} from 'react-bootstrap'
import imgOne from '../Assets/footer-1-img-1.jpg'
import imgThree from '../Assets/tractor.jpg'
import imgFour from '../Assets/pole.jpg'
import {Link} from "react-scroll";

const Footer = () => {
  const menu = [
    {
      id: uuid(),
      title: 'о нас',
      info: 'ОАО «Кыргыз Агрохолдинг» - это государственная компания, созданная для поддержки сельхозпроизводителей и обеспечения продовольственной безопасности Кыргызстана.',
    },
    {
      id: uuid(),
      title: 'Навигация',
      options: [
        {
          id: uuid(),
          optionName: 'Главная',
          linkTo: 'banner',
        },
        {
          id: uuid(),
          optionName: 'Наши цели',
          linkTo: 'our-goals',
        },
        {
          id: uuid(),
          optionName: 'Деятельность',
          linkTo: 'activity',
        },
        {
          id: uuid(),
          optionName: 'Экспорт',
          linkTo: 'export',
        },
        {
          id: uuid(),
          optionName: 'Планы',
          linkTo: 'plans',
        },
        {
          id: uuid(),
          optionName: 'Новости',
          linkTo: 'news',
        },
        {
          id: uuid(),
          optionName: 'Контакты',
          linkTo: 'footer',
        },
      ],
    },
    {
      id: uuid(),
      title: 'контакты',
      info: `г. Бишкек. Первомайский район, улица Киевская, 96 А, 5 этаж 501 кабинет`,
      number: '+(996) 507 19 03 00',
      email: 'kyrgyzagroholding@gmail.com',
      socialLinks: [
        {
          id: uuid(),
          icon: <FaFacebookSquare />,
        },
      ],
    },
  ]

  const handleGoToFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=61576205045177", "_blank")
  }


  return (
    <footer id="footer">
      <div className='footer__wrapper'>
        <div className='footer__wrapper__top'>
          <Container>
            <Row>
              <Col xl={4} lg={4} md={6} sm={12}>
                <h2 className='title'>{menu[0].title}</h2>
                <p>{menu[0].info}</p>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12}>
                <div className='explore jsc'>
                  <h2 className='title'>{menu[1].title}</h2>
                  {menu[1].options?.map((x) => (
                    <Link
                      key={x.id}
                      to={x.linkTo}
                      smooth={true}
                      duration={500}
                      className="footer-link"
                      style={{ cursor: 'pointer', display: 'block', marginBottom: '8px', color: '#fff' }} // можно стилизовать через CSS
                    >
                      {x.optionName}
                    </Link>
                  ))}
                </div>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12}>
                <h2 className='title'>{menu[2].title}</h2>
                <p>{menu[2].info}</p>
                <p className='yellow__brand'>{menu[2].email}</p>
                <p className='yellow__brand'>{menu[2].number}</p>
                <div className='icons__footer'>
                  {menu[2].socialLinks?.map((y) => (
                    <div className='icon_wra' onClick={handleGoToFacebook}>{y.icon}</div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='footer__wrapper__bottom'>
          <Container>
            <h5>© 2025 Агрохолдинг. Все права защищены</h5>
          </Container>
        </div>
      </div>
    </footer>
  )
}

export default Footer
