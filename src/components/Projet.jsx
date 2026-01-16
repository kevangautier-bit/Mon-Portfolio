import datas from '../datas.json'


function Projet() {
    return (
        <div className="projet">
            <h1 className="title">Mes projets</h1>

            <section className="projet-content">
                {datas.projets.map((projet) => (
                    <div key={projet.id} className="projet-card">
                        <h3>{projet.titre}</h3>
                        <p>{projet.description}</p>
                        <p className="type">{projet.type}</p>
                        <div className="technologies">
                            {projet.technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Projet
