import "./Header.css";
import nightModeImage from "../../assets/images/dark-mode.png";

const Header = () => {
    return ( 
        <header>
            <h2 className="logo">
                AC.
            </h2>
            <nav>
                <a href="#">projects</a>
                <a href="#">skills</a>
                <a href="#">contact</a>
                <img src={nightModeImage} alt="dark-mode-img" />
            </nav>
        </header>
    );
}

export default Header;