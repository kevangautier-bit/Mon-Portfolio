import photo from '../assets/kevan.png'


function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className='header-text'>

                    <h1 className="header-inner-title">Kevan Gautier</h1>
                    <p className="header-inner-subtitle">Développeur web Freelance Full Stack </p>
                </div>
                <img
                    src={photo}
                    alt="Photo de Kevan"
                    className="header-inner-photo"
                />
            </div>
        </header >

    )
}

export default Header 