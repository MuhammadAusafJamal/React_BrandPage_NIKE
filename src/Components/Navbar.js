import brand from "../Assets/brandlogo.png";

function Navbar() {
    return (
        <div className="navbar container">
            <nav>
                <div className="mainLogo">
                    <img src={brand} alt="Nike-Logo" />
                </div>
                <ul>
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>

                <button className="loginBtn">LOGIN</button>
            </nav>
        </div>
    );
}

export default Navbar;