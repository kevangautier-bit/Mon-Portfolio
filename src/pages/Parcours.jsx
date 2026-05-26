import MatrixRain from '../components/MatrixRain';
import Navbar from '../components/Navbar';

const STEPS = [
  {
    id: '01',
    icon: '📍',
    tag: 'Avant tout',
    title: 'Expériences multiples',
    text: "Fort d'une grande expérience dans différents domaines, j'ai travaillé dans beaucoup de métiers différents avant de réellement trouver ma voie.",
  },
  {
    id: '02',
    icon: '💼',
    tag: 'Expérience',
    title: 'Public & Privé',
    text: "J'ai autant travaillé dans le public que dans le privé et j'y ai appris une devise importante : \"le travail est un plaisir\".",
  },
  {
    id: '03',
    icon: '🔄',
    tag: '2024',
    title: 'Nouveau départ',
    text: "Devenu père en 2024, j'ai décidé de changer de vie professionnelle par la même occasion et de me lancer dans le monde du développement.",
  },
  {
    id: '04',
    icon: '🎓',
    tag: 'Présent',
    title: 'Wild Code School',
    text: "Je suis aujourd'hui en formation à la Wild Code School en bootcamp pour devenir développeur full stack.",
  },
];

export default function Parcours() {
  return (
    <div className="page">
      <MatrixRain opacity={0.15} />
      <Navbar />

      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-prefix">&gt; </span>cat parcours.log
          </h1>
          <p className="page-subtitle">{'// Mon histoire, ligne par ligne'}</p>
        </div>

        <div className="timeline">
          {STEPS.map(step => (
            <div key={step.id} className="timeline-item">
              <div className="timeline-id">[{step.id}]</div>
              <div className="timeline-line" />
              <div className="timeline-card">
                <span className="timeline-tag">{'// '}{step.tag}</span>
                <h2 className="timeline-title">
                  <span className="timeline-icon">{step.icon}</span>
                  {step.title}
                </h2>
                <p className="timeline-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
