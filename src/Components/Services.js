import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import Leaf from '../Assets/leaf.png';

const Services = () => {
  const allBoxes = [
    {
      id: uuid(),
      title: 'Стабильный продовольственный рынок',
      info: 'Обеспечение стабильного продовольственного рынка за счет устойчивых поставок, поддержки сельскохозяйственных производителей и предотвращения продовольственных кризисов.',
    },
    {
      id: uuid(),
      title: 'Развитие сельского хозяйства',
      info: 'Улучшение агротехнологий, внедрение инноваций и расширение поддержки фермеров для повышения урожайности и устойчивости сельского хозяйства.',
    },
    {
      id: uuid(),
      title: 'Модернизация пищевой промышленности',
      info: 'Внедрение современных технологий переработки и хранения продуктов, улучшение качества пищевых товаров и развитие экспортного потенциала отрасли.',
    },
    {
      id: uuid(),
      title: 'Поддержка сельхозпроизводителей',
      info: 'Оказание финансовой и технической помощи фермерам, субсидирование сельхозпроизводства и создание благоприятных условий для устойчивого развития аграрного сектора.',
    },
    {
      id: uuid(),
      title: 'Развитие торгово-логистической инфраструктуры',
      info: 'Создание современных складских комплексов, транспортных узлов и логистических центров для эффективного хранения, транспортировки и распределения сельскохозяйственной продукции.',
    },
    {
      id: uuid(),
      title: 'Экспортно-импортные операции',
      info: 'Содействие выходу отечественной продукции на международные рынки, упрощение экспортных и импортных процедур, а также обеспечение выгодных условий торговли.',
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const isCollapsed = visibleCount === 3;

  const toggleVisibility = () => {
    setVisibleCount(isCollapsed ? allBoxes.length : 3);
  };

  return (
    <div className="services">
      <Container>
        <div className="services__up">
          <div className="title-with-leaf">
            <Image src={Leaf} alt="Leaf Icon" className="leaf-icon left"/>
            <h2 className="section-title">Наши Цели</h2>
            <Image src={Leaf} alt="Leaf Icon" className="leaf-icon right"/>
          </div>
          <p>
            Открытое акционерное общество "Кыргыз Агрохолдинг" активно работает над развитием сельского хозяйства в
            Кыргызстане. Мы стремимся улучшить аграрный сектор, поддерживая фермеров и развивая инновационные
            технологии.
          </p>
        </div>

        <div className="services__down">
          <div className="grid-container">
            {allBoxes.slice(0, visibleCount).map((box) => (
              <div className="box" key={box.id}>
                <div className="top">
                  <h2>{box.title}</h2>
                  <p>{box.info}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="toggle-btn-container">
            <button className="toggle-btn" onClick={toggleVisibility}>
              {isCollapsed ? 'Показать больше' : 'Скрыть'}
            </button>
          </div>
        </div>
      </Container>
    </div>


  );
};

export default Services;
