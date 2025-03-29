import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Leaf from "../Assets/leaf.png";
import One from "../Assets/blog-1-img-1.jpg";
import Two from "../Assets/blog-1-img-4.jpg";
import Three from "../Assets/blog-1-img-5.jpg";

import { FaChevronCircleRight } from "react-icons/fa";

const NewsAndArticles = () => {
  const boxes = [
    {
      id: uuid(),
      image: One,
      title: `Фондовый рынок`,
      info: "«Кыргыз Агрохолдинг» выпускает дополнительные акции на 200 млн сомов",
      date: "10 Декабря, 2024",
    },
    {
      id: uuid(),
      image: Three,
      title: `Бюджет`,
      info: "Кабмин выделяет 200 млн сомов «Кыргыз Агрохолдинг» на поддержку ирригационного фонда",
      date: "1 Ноября, 2024",
    },
    {
      id: uuid(),
      image: Two,
      title: `Законодательство`,
      info: "Президент поменял управляющую компанию в «Агрокомплексе «Корея — Кыргызстан»",
      date: "5 Августа, 2024",
    },
  ];
  return (
    <div className="news" id="news">
      <Container>
        <div className="news__content">
          <p>из блога</p>
          <h1>Новости и статьи</h1>
          <Image src={Leaf} alt="" />
          <Row>
            {boxes?.map((box) => (
              <Col key={box.id} xl={4} lg={4} md={4} sm={12} className="mb-5">
                <div className="blog__Card">
                  <div className="img__wrapp">
                    <Image src={box.image} alt="" />
                    <div className="date__badge">{box.date}</div>
                  </div>
                  <div className="blog__Card__body">
                    <div className="blog__content">
                      <h3>{box.title}</h3>
                      <p>{box.info}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NewsAndArticles;
