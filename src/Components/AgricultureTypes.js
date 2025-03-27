import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Стили

const AgricultureTypes = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const activities = [
    { text: "Производство, хранение, переработку и реализацию сельскохозяйственной продукции." },
    { text: "Участие в экспортно-импортных операциях, включая фьючерсные контракты и контракты на поставку продукции." },
    { text: "Создание и управление агропромышленными парками, торгово-логистическими центрами и инвестиционными платформами."},
    { text: "Развитие сельского хозяйства через модернизацию и импортозамещение." },
    { text: "Подготовку проектов и участие в закупках для обеспечения государственных нужд." }
  ];

  function getActivityIcon(index) {
    const icons = ["🌱", "🌍", "🏢", "🚜", "📋"];
    return icons[index] || "✅";
  }

  return (
    <div className="activities-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title" data-aos="fade-down">
            <span className="title-decorator">//</span> Основные виды деятельности
          </h2>
          <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">
            ОАО «Кыргыз агрохолдинг» осуществляет многопрофильную деятельность,
            <br/>направленную на развитие агропромышленного комплекса Кыргызстана
          </p>
          <div className="section-divider" data-aos="fade-down" data-aos-delay="200">
            <div className="divider-line"></div>
            <div className="divider-icon">🌾</div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div
              className="activity-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
            >
              <div className="card-decoration">
                <div className="corner-decor top-left"></div>
                <div className="corner-decor top-right"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
              </div>

              <div className="card-header">
                <div className={`card-icon icon-${index + 1}`}>
                  {getActivityIcon(index)}
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>

              <div className="card-body">
                <p className="card-text">{activity.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AgricultureTypes;
