import '../header/header.css';
import Navbar from '../navbars/Navbar';
import Social from '../social/Social';

const Header = () => {
    return (
        <header className="header">
          <div>
            <h1>Max Zamolin</h1>
            <h2>Frontend Enginer</h2>
            <p>I build accessible, pixel-perfect experiences for the web.</p>
            <Navbar />
          </div>
          <Social />
        </header>
    )
}

export default Header;