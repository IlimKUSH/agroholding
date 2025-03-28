import React from "react";
import { Container, Image } from "react-bootstrap";
import Leaf from "../Assets/leaf.png";
import PotatoIcon from "../Assets/testimonials-1.png";
import GreensIcon from "../Assets/testimonials-2.png";
import ChickenIcon from "../Assets/testimonials-3.png";

const Testimonials = () => {
  return (
    <div className="testimonials" id="export">
      <Container>
        <div className="section-header" data-aos="fade-down">
          <div className="title-with-leaf">
            <Image src={Leaf} alt="Leaf Icon" className="leaf-icon left" />
            <h2 className="section-title">Экспорт</h2>
            <Image src={Leaf} alt="Leaf Icon" className="leaf-icon right" />
          </div>
          <p
            className="section-subtitle"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            ОАО «Кыргыз Агрохолдинг» активно реализует ряд проектов,
            направленных на развитие агропромышленного комплекса Кыргызстана и
            укрепление международных связей. Ниже представлены ключевые
            инициативы:
          </p>
          <div className="section-divider">
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="testimonials__left">
          <div
            className="testimonials__left__export-item"
            data-aos="slide-right"
            data-aos-delay="0"
          >
            <Image src={PotatoIcon} alt="Картофель" />
            <div>
              <h3>Республика Узбекистан</h3>
              <p>
                В октябре 2024 года был заключён контракт на поставку картофеля
                в Республику Узбекистан.
              </p>
            </div>
          </div>

          <div
            className="testimonials__left__export-item"
            data-aos="slide-right"
            data-aos-delay="150"
          >
            <Image src={GreensIcon} alt="Зелень" />
            <div>
              <h3>Российская Федерация</h3>
              <p>
                В ноябре 2024 года был заключён контракт на поставку капусты,
                моркови, редьки и свеклы в Российскую Федерацию.
              </p>
            </div>
          </div>

          <div
            className="testimonials__left__export-item"
            data-aos="slide-right"
            data-aos-delay="300"
          >
            <Image src={ChickenIcon} alt="Курица" />
            <div>
              <h3>Китайская Народная Республика</h3>
              <p>
                В декабре 2024 года был заключён контракт на поставку
                субпродуктов птицы в Китайскую Народную Республику.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
