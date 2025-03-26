import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Leaf from "../Assets/leaf.png";
import PotatoIcon from "../Assets/testimonials-1.png"; 
import GreensIcon from "../Assets/testimonials-2.png";
import ChickenIcon from "../Assets/testimonials-3.png"; 

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container>
        <Row>
          <Col xl={8} lg={8} md={8} sm={8}>
            <div className="testimonials__left">
              <h1 className="testimonials__title">Экспорт</h1>
              <p className="infpoo">
                ОАО «Кыргыз Агрохолдинг» активно реализует ряд проектов,
                направленных на развитие агропромышленного комплекса Кыргызстана
                и укрепление международных связей. Ниже представлены ключевые
                инициативы:
              </p>

              <div className="testimonials__left__export-item">
                <Image src={PotatoIcon} alt="Картофель" />
                <div>
                  <h3>Республика Узбекистан</h3>
                  <p>
                    В октябре 2024 года был заключён контракт на поставку
                    картофеля в Республику Узбекистан.
                  </p>
                </div>
              </div>

              <div className="testimonials__left__export-item">
                <Image src={GreensIcon} alt="Зелень" />
                <div>
                  <h3>Российская Федерация</h3>
                  <p>
                    В ноябре 2024 года был заключён контракт на поставку
                    капусты, моркови, редьки и свеклы в Российскую Федерацию.
                  </p>
                </div>
              </div>

              <div className="testimonials__left__export-item">
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
          </Col>
          <Col xl={4} lg={4} md={4} sm={4}>
            <div className="testimonials__right">
              {/* Содержимое правого блока */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
