import MatrixRain from '../components/MatrixRain';
import Navbar from '../components/Navbar';

const COMPETENCES_DEV = [
  'HTML / CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'SQL', 'Git / GitHub',
];

const COMPETENCES_PRO = [
  'Préparation de commandes',
  'Gestion des stocks & inventaire',
  'Mise en rayon / Encaissement',
  'Expédition & Allotissement',
  'Manutention & emballage',
  'Transpalette manuel & électrique',
  'Management d\'équipe',
  'Pack Office (Excel, Word)',
];

const QUALITES = [
  'Polyvalent', 'Résilient', 'Rigoureux & Organisé', 'Esprit d\'équipe', 'Leadership naturel',
];

const FORMATIONS = [
  {
    date: '2025 – 2026',
    titre: 'Formation Développeur Full Stack Web & Web Mobile',
    detail: 'RNCP Niveau 5 – Wild Code School',
  },
  {
    date: 'Juin 2014',
    titre: 'BTS Management des Unités Commerciales',
    detail: '',
  },
  {
    date: 'Juin 2012',
    titre: 'Baccalauréat SES',
    detail: '',
  },
];

const EXPERIENCES = [
  {
    periode: 'Sept 2025 → Avr 2026',
    entreprise: 'Wild Code School',
    poste: 'Formation Développeur Full Stack Web & Web Mobile',
    details: [
      'Formation certifiante RNCP Niveau 5 (certification en cours, fin mai 2026)',
      'HTML, CSS, JavaScript, React, Node.js, SQL',
      'Disponible dès le 1er juin 2026',
    ],
  },
  {
    periode: 'Sept 2024 → Sept 2025',
    entreprise: 'Disponibilité Parentale',
    poste: 'Congé parental – Garde de ma fille',
    details: ['Interruption volontaire d\'activité pour assurer la garde de ma fille'],
  },
  {
    periode: 'Sept 2019 → Août 2024 (5 ans)',
    entreprise: 'Groupe LDLC',
    poste: 'Ouvrier qualifié · Coordinateur terrain – Entrepôt Logistique',
    details: [
      'Préparation de commandes et assemblage de colis, rangement & inventaire',
      'Expédition : récupération des commandes, mise sur palettes, sur-emballage des produits volumineux',
      'Coordination des préparateurs piétons et caristes – leadership terrain sans titre officiel',
    ],
  },
  {
    periode: 'Mars → Août 2019',
    entreprise: 'Groupe Convivio',
    poste: 'Agent polyvalent agroalimentaire – Cuisine Centrale',
    details: [
      'Préparation de repas, mise sous vide, travail en boucherie',
      'Allotissement logistique pour la préparation des livraisons de repas',
    ],
  },
  {
    periode: 'Mars → Sept 2018',
    entreprise: 'Rectorat de Nantes',
    poste: 'Vacataire saisonnier',
    details: ['Mise sous pli et préparation des sujets d\'examens, livraison dans les établissements, accueil'],
  },
  {
    periode: 'Nov 2017 → Jan 2018',
    entreprise: 'Loste Tradi France',
    poste: 'Agent polyvalent',
    details: ['Préparation des commandes, nettoyage, appui cuisine'],
  },
  {
    periode: 'Mars–Oct 2017 / Mars–Juin 2016',
    entreprise: 'Rectorat de Nantes',
    poste: 'Vacataire saisonnier (missions récurrentes)',
    details: ['Mise sous pli et préparation des sujets d\'examens, livraison dans les établissements, accueil'],
  },
  {
    periode: 'Juin 2016 → Jan 2017',
    entreprise: 'Chlorophylle (Intérim)',
    poste: 'Vendeur Libre Service',
    details: ['Mise en rayon, encaissement, gestion des approvisionnements'],
  },
  {
    periode: 'Avr → Oct 2015',
    entreprise: 'ENI – Énergie',
    poste: 'Conseiller Commercial / VRP',
    details: [
      'Prospection terrain et vente directe porte-à-porte',
      'Négociation, gestion du rejet client, persévérance et sens du contact',
    ],
  },
  {
    periode: 'Juil 2014 → Mars 2015',
    entreprise: 'SNCF',
    poste: 'Agent d\'accueil en gare',
    details: ['Accueil, orientation et information des voyageurs en gare'],
  },
  {
    periode: '2013 – 2014',
    entreprise: 'Stages BTS MUC',
    poste: 'Supermarché Casino · Sport 2000',
    details: [
      'Casino : création d\'un stand snack, gestion caisse & stocks, calcul des marges',
      'Sport 2000 : ventes, merchandising, organisation des soldes chaussures',
    ],
  },
];

export default function CV() {
  return (
    <div className="page">
      <MatrixRain opacity={0.15} />
      <Navbar />

      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-prefix">&gt; </span>cat ./cv.txt
          </h1>
          <p className="page-subtitle">
            {'// Kevan GAUTIER · Développeur Full Stack · Nantes · Disponible dès le 1er juin 2026'}
          </p>
          <div className="cv-actions">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              [ Voir le PDF ]
            </a>
            <a
              href="/cv.pdf"
              download="CV_Kevan_GAUTIER.pdf"
              className="cta-btn secondary"
            >
              [ Télécharger ]
            </a>
          </div>
        </div>

        <div className="cv-grid">
          <aside className="cv-sidebar">
            <section className="cv-section">
              <h2 className="cv-section-title">// contact</h2>
              <ul className="cv-list">
                <li>06 45 74 53 05</li>
                <li>kevangautier@gmail.com</li>
                <li>Nantes (44)</li>
                <li>Permis B + Véhicule</li>
              </ul>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">// compétences dev</h2>
              <div className="cv-tags">
                {COMPETENCES_DEV.map((c, i) => (
                  <span key={i} className="tech-tag">{c}</span>
                ))}
              </div>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">// compétences pro</h2>
              <ul className="cv-list">
                {COMPETENCES_PRO.map((c, i) => (
                  <li key={i}>&gt; {c}</li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">// qualités</h2>
              <ul className="cv-list">
                {QUALITES.map((q, i) => (
                  <li key={i}>&gt; {q}</li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">// formation</h2>
              {FORMATIONS.map((f, i) => (
                <div key={i} className="cv-formation">
                  <p className="cv-formation-date">{f.date}</p>
                  <p className="cv-formation-titre">{f.titre}</p>
                  {f.detail && <p className="cv-formation-detail">{f.detail}</p>}
                </div>
              ))}
            </section>
          </aside>

          <div className="cv-main">
            <section className="cv-section">
              <h2 className="cv-section-title">// expériences professionnelles</h2>
              <div className="timeline">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-id">#{String(i + 1).padStart(2, '0')}</div>
                    <div className="timeline-line" />
                    <div className="timeline-card">
                      <span className="timeline-tag">{exp.periode}</span>
                      <p className="timeline-title">{exp.entreprise}</p>
                      <p className="cv-poste">{exp.poste}</p>
                      <ul className="cv-details">
                        {exp.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
