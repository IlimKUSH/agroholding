import {useRef, useState} from 'react'
import {Image} from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import OneImage from '../Assets/slide_v1_1.jpg'
import TwoImage from '../Assets/slide_v1_2.jpg'
import ThreeImage from '../Assets/slide_v1_3.jpg'

import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'

const Banner = () => {
  const [activeButton, setActiveButton] = useState('back');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  }

  const sliderRef = useRef()

  const next = () => {
    sliderRef.current.slickNext();
    setActiveButton('forward');
  }
  const previous = () => {
    sliderRef.current.slickPrev();
    setActiveButton('back');
  }

  return (
    <div className='banner'>
      <Slider ref={sliderRef} {...settings}>
        <div className='slider__wrapper'>
          <Image src={OneImage} alt='' />
          <div className='content'>
          <p>Открытое акционерное общество</p>
            <h1>
              "Кыргыз Агрохолдинг" <br />  <h2>— это государственная компания, созданная для поддержки сельхозпроизводителей <br />и обеспечения продовольственной безопасности Кыргызстана.</h2>
            </h1>
            <button>Узнать больше</button>
          </div>
        </div>
        <div className='slider__wrapper'>
          <Image src={TwoImage} alt='' />
          <div className='content'>
          <p>Открытое акционерное общество</p>
            <h1>
              "Кыргыз Агрохолдинг" <br />  <h2>— это государственная компания, созданная для поддержки сельхозпроизводителей <br />и обеспечения продовольственной безопасности Кыргызстана.</h2>
            </h1>
            <button>Узнать больше</button>
          </div>
        </div>
        <div className='slider__wrapper'>
          <Image src={ThreeImage} alt='' />
          <div className='content'>
            <p>Открытое акционерное общество</p>
            <h1>
              "Кыргыз Агрохолдинг" <br />  <h2>Приглашает инвесторов к сотрудничеству для реализации масштабных проектов,<br /> которые будут способствовать развитию агропромышленного сектора и укреплению продовольственной безопасности страны.</h2>
            </h1>
            <button>Узнать больше</button>
          </div>
        </div>
      </Slider>
      <div className='banner__buttons'>
      <button 
          className={`btn1 ${activeButton === 'back' ? 'active' : ''}`} 
          onClick={previous}
        >
          <BiChevronLeft />
          Назад
        </button>
        <button 
          className={`btn2 ${activeButton === 'forward' ? 'active' : ''}`} 
          onClick={next}
        >
          Вперед
          <BiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Banner
