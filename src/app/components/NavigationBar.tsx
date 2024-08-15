import "../sass/index.scss";
function NavigationBar() {
    return (
        <div className="navigation-bar">
            <div className="navigation-bar__logo">&lt; CORE &gt;</div>
            <div className="navigation-bar__menu">
                <a href="#">Acceuil</a>
                <a href="#">Services</a>
                <a href="#">Membres</a>
                <a href="#">BUT</a>
                <a href="#">Contact</a>
            </div>
            <div className="navigation-bar__buttons">
                <a
                    href="#"
                    className="button-primary">
                    Contactez Nous
                </a>
            </div>
        </div>
    );
}

export default NavigationBar;
