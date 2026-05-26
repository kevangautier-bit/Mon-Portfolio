import { useNavigate } from 'react-router-dom';
import MatrixRain from '../components/MatrixRain';
import TypeWriter from '../components/TypeWriter';
import Navbar from '../components/Navbar';

const LINES = [
  { prefix: '> ', text: 'system.init()',        style: 'cmd',              pause: 600 },
  { prefix: '  ', text: 'Chargement...',         style: 'info',             pause: 400, fast: true },
  { prefix: '> ', text: 'whoami',                style: 'cmd',              pause: 400 },
  { prefix: '  ', text: 'Kevan Gautier',         style: 'result-highlight', pause: 500 },
  { prefix: '> ', text: 'cat role.txt',          style: 'cmd',              pause: 400 },
  { prefix: '  ', text: 'Développeur Full Stack',style: 'result',           pause: 500 },
  { prefix: '> ', text: 'status --current',      style: 'cmd',              pause: 400 },
  { prefix: '  ', text: '@ Wild Code School',    style: 'result',           pause: 700 },
  { prefix: '> ', text: './portfolio --explore', style: 'cmd',              pause: 1000 },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-home">
      <MatrixRain opacity={0.4} />
      <Navbar />

      <main className="home-content">
        <div className="terminal-box">
          <div className="terminal-header">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
            <span className="terminal-title">kevan@matrix:~$</span>
          </div>
          <div className="terminal-body">
            <TypeWriter lines={LINES} charDelay={45} lineDelay={200} />
          </div>
        </div>

        <div className="home-cta">
          <button className="cta-btn primary" onClick={() => navigate('/projets')}>
            [ MES PROJETS ]
          </button>
          <button className="cta-btn secondary" onClick={() => navigate('/parcours')}>
            [ MON PARCOURS ]
          </button>
        </div>
      </main>
    </div>
  );
}
