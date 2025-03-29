import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Img from "../Assets/product-1-img-1.jpg";
import One from "../Assets/growing-products-img-1.png";
import Two from "../Assets/growing-products-img-2.png";
import Three from "../Assets/growing-products-img-3.png";

const GrowingProducts = () => {
  return (
    <div className="growing">
      <Container>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="image_container">
              <Image src={Three} alt="" />
              <div className="fit">
                <p>Государственный</p>
                <p>контракт</p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="products">
              <p>контракт на поставку ИРП для пограничников</p>
              <h3>
                Обеспечение пограничников Кыргызстана индивидуальными рационами
                питания
              </h3>

              <div className="para__wrapper">
                <Image src={Two} height={50} />
                <p className="para">
                  В декабре 2024 года заключён контракт с Пограничной службой
                  Государственного комитета национальной безопасности Кыргызской
                  Республики на поставку индивидуального рациона питания (ИРП)
                  для пограничников согласно распоряжению Кабинета Министров от
                  27 декабря 2024 года № 858-т.
                </p>
              </div>

              <div className="para__wrapper">
                <Image src={One} height={50} />
                <p className="para">
                  Планы на 2025 год Расширение поставок индивидуального рациона
                  питания для всех силовых структур Кыргызстана
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GrowingProducts;
