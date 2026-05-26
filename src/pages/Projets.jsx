import MatrixRain from '../components/MatrixRain';
import Navbar from '../components/Navbar';
import datas from '../datas.json';

export default function Projets() {
  return (
    <div className="page">
      <MatrixRain opacity={0.15} />
      <Navbar />

      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-prefix">&gt; </span>ls ./projets
          </h1>
          <p className="page-subtitle">
            {'// '}{datas.projets.length} projets trouvés
          </p>
        </div>

        <div className="projects-grid">
          {datas.projets.map((projet, i) => (
            <div key={projet.id} className="project-card">
              <div className="card-index">#{String(i + 1).padStart(2, '0')}</div>
              <h2 className="card-title">{projet.titre}</h2>
              <p className="card-type">{'// '}{projet.type}</p>
              <p className="card-desc">{projet.description}</p>
              <div className="card-techs">
                {projet.technologies.map((tech, j) => (
                  <span key={j} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="card-links">
                <a
                  href={projet.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  [ GitHub ]
                </a>
                {projet.demo && (
                  <a
                    href={projet.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link secondary"
                  >
                    [ Demo ]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
