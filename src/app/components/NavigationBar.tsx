import "../sass/index.scss";
import Button from "./Button";
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
                <Button type="primary">Contactez Nous</Button>
            </div>
        </div>
    );
}

export default NavigationBar;
