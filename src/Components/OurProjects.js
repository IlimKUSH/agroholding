import React, {useEffect} from 'react';
import {Container, Image} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Leaf from "../Assets/leaf.png";
import {TbBuildingFactory, TbPlaneTilt, TbRefresh, TbWorld} from "react-icons/tb";

const OurProjects = () => {
  const projects = [
    {
      title: 'Строительство перерабатывающего предприятия',
      location: 'село Жаны-Пахта, Сокулукский район, Чуйская область',
      details: [
        {
          text: 'По поручению Президента Кыргызской Республики выделено и трансформировано 18 га земли под производство (с перспективой увеличения до 99 га)',
        },
        {
          text: 'Подготовлена проектно-сметная документация на строительство современного очистительного сооружения и инфраструктуры, включая дороги, водо- и электроснабжение',
        },
        {
          text: 'Для инвесторов: компания берёт на себя создание всей необходимой инфраструктуры. Инвесторам остаётся реализовать строительство завода',
        }
      ],
      icon: <TbBuildingFactory size={28} className="text-red-500"/>,
      progress: 35,
      startDate: 'Q1 2024',
      completionDate: 'Q4 2025',
      budget: '15 млн USD',
      partners: ['Министерство сельского хозяйства', 'Местные фермерские кооперативы'],
    },
    {
      title: 'Полная модернизация племенной станции "Элита"',
      details: [
        {
          text: 'Строительство ферм для крупного и мелкого рогатого скота',
        },
        {
          text: 'Увеличение численности скота',
        },
        {
          text: 'Улучшение пород скота',
        },
        {
          text: 'Создание мясоперерабатывающего предприятия для дальнейшего экспорта переработанного мяса',
        }
      ],
      icon: <TbRefresh size={28} className="text-brown-500"/>,
      progress: 20,
      startDate: 'Q2 2024',
      completionDate: 'Q3 2025',
      budget: '8 млн USD',
      partners: ['Государственный племенной фонд', 'Международные сельхоз организации'],
    },
    {
      title: 'Проект в Сокулукском районе, Чуйской области, вблизи аэропорта «Манас»',
      details: [
        {
          text: 'На участке площадью 350 га планируется строительство:',
        },
        {
          text: 'Торгово-логистического центра (ТЛЦ) для хранения и переработки сельхозпродукции',
        },
        {
          text: 'Теплиц для выращивания высокомаржинальных культур',
        }
      ],
      icon: <TbPlaneTilt size={28} className="text-blue-500"/>,
      progress: 15,
      startDate: 'Q3 2024',
      completionDate: 'Q2 2026',
      budget: '25 млн USD',
      partners: ['Аэропорт Манас', 'Министерство транспорта'],
    },
    {
      title: 'Расширение экспортно-импортных операций',
      details: [
        {
          text: 'Продолжение развития направлений по поставкам сельскохозяйственной продукции',
        },
        {
          text: 'Активизация сотрудничества с зарубежными партнёрами для продвижения отечественной продукции на международных рынках',
        }
      ],
      icon: <TbWorld size={28} className="text-indigo-500"/>,
      progress: 40,
      startDate: 'Q1 2024',
      completionDate: 'Q4 2024',
      budget: '5 млн USD',
      partners: ['Торговые представительства за рубежом', 'Ассоциация экспортеров'],
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="plans-2025">
      <Container>
        <div className="plans-header" data-aos="fade-down">
          <div className="title-with-leaf">
            <Image src={Leaf} alt="Leaf Icon" className="leaf-icon left" width={40} height={40}/>
            <h2 className="section-title">Стратегические проекты 2025</h2>
            <Image src={Leaf} alt="Leaf Icon" className="leaf-icon right" width={40} height={40}/>
          </div>
          <p className="plans-subtitle">Инновационные решения для развития агропромышленного комплекса</p>
          <div className="divider">
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              className="plan-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="plan-number">{index + 1}</div>
              <div className="plan-content">
                <div className="plan-header">
                  <div className="project-icon">{project.icon}</div>
                  <div>
                    <h3 className="plan-title">{project.title}</h3>
                    {project.location && (
                      <div className="plan-location">
                        <svg className="location-icon" viewBox="0 0 24 24">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="plan-body">
                  <ul className="plan-details">
                    {project.details.map((detail, i) => (
                      <li key={i} className="detail-item">
                        <div className="detail-marker"></div>
                        <div className="detail-text">{detail.text}</div>
                      </li>
                    ))}
                  </ul>

                  <div className="project-meta">
                    <div className="meta-grid">
                      <div className="meta-item">
                        <span className="meta-label">Начало:</span>
                        <span className="meta-value">{project.startDate}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Завершение:</span>
                        <span className="meta-value">{project.completionDate}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Бюджет:</span>
                        <span className="meta-value">{project.budget}</span>
                      </div>
                      <div className="meta-item progress-item">
                        <span className="meta-label">Прогресс:</span>
                        <div className="progress-container">
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{width: `${project.progress}%`}}
                            ></div>
                          </div>
                          <span className="progress-value">{project.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="project-info-grid">
                      <div className="project-partners">
                        <h4 className="info-title">Партнеры проекта:</h4>
                        <div className="partners-list">
                          {project.partners.map((partner, i) => (
                            <span key={i} className="partner-tag">{partner}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;