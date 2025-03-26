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

const Footer = () => {
  const menu = [
    {
      id: uuid(),
      title: 'о нас',
      info: 'ОАО «Кыргыз Агрохолдинг» - это государственная компания, созданная для поддержки сельхозпроизводителей и обеспечения продовольственной безопасности Кыргызстана.',
    },
    {
      id: uuid(),
      title: 'навигация',
      options: [
        {
          id: uuid(),
          optionName: 'о нас',
        },
        {
          id: uuid(),
          optionName: 'услуги',
        },
        {
          id: uuid(),
          optionName: 'наши проекты',
        },
        {
          id: uuid(),
          optionName: 'последние новости',
        },
        {
          id: uuid(),
          optionName: 'контакты',
        },
      ],
    },
    {
      id: uuid(),
      title: 'новости',
      options: [
        {
          id: uuid(),
          image: imgOne,
          info: '«Кыргыз Агрохолдинг» выпускает дополнительные акции на 200 млн сомов',
          date: '12 Декабря, 2024',
        },
        {
          id: uuid(),
          image: imgThree,
          info: 'Кабмин выделяет 200 млн сомов «Кыргыз Агрохолдинг» на поддержку ирригационного фонда',
          date: '1 Ноября, 2024',
        },
        {
          id: uuid(),
          image: imgFour,
          info: 'Президент поменял управляющую компанию в «Агропромышленном комплексе «Корея — Кыргызстан»',
          date: '5 Августа, 2024',
        },
      ],
    },
    {
      id: uuid(),
      title: 'контакты',
      info: `город Бишкек, ул. Киевская, 96а.`,
      number: '+996 999 000 196',
      email: 'agroholding@gmail.com',
      socialLinks: [
        {
          id: uuid(),
          icon: <FaFacebookSquare />,
        },
        {
          id: uuid(),
          icon: <FaTwitter />,
        },
        {
          id: uuid(),
          icon: <FaInstagram />,
        },
        {
          id: uuid(),
          icon: <FaDribbble />,
        },
      ],
    },
  ]
  return (
    <footer>
      <div className='footer__wrapper'>
        <div className='footer__wrapper__top'>
          <Container>
            <Row>
              <Col xl={3} lg={3} md={6} sm={12}>
                <h2 className='title'>{menu[0].title}</h2>
                <p>{menu[0].info}</p>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12}>
                <div className='explore jsc'>
                  <h2 className='title'>{menu[1].title}</h2>
                  {menu[1].options?.map((x) => (
                    <p key={x.id}>{x.optionName}</p>
                  ))}
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12}>
                <h2 className='title'>{menu[2].title}</h2>
                {menu[2].options?.map((x) => (
                  <div className='f__wrapper' key={x.id}>
                    <Image src={x.image} alt='' width={50} height={50} />
                    <div>
                      <p>{x.info}</p>
                      <p className='yellow__brand'>{x.date}</p>
                    </div>
                  </div>
                ))}
              </Col>
              <Col xl={3} lg={3} md={6} sm={12}>
                <h2 className='title'>{menu[3].title}</h2>
                <p>{menu[3].info}</p>
                <p className='yellow__brand'>{menu[3].email}</p>
                <p className='yellow__brand'>{menu[3].number}</p>
                <div className='icons__footer'>
                  {menu[3].socialLinks?.map((y) => (
                    <div className='icon_wra'>{y.icon}</div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='footer__wrapper__bottom'>
          <Container>
            <h5>© 2025 Агрохолдинг. Все права защищены</h5>
            <div>
              <h5>Политика конфиденциальности</h5>
              <h5>Условия использования</h5>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}

export default Footer
