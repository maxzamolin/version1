import '../header/header.css';
import Navbar from '../navbars/Navbar';
import Social from '../social/Social';

const Header = () => {
    return (
        <header className="header reveal-item">
          <div>
            <h1>Максим Замолин</h1>
            <h2 className="subtitle">Frontend разработчик</h2>
            <p>Я создаю чистые и адаптивные веб интерфейсы.</p>
            <Navbar />
          </div>
          <Social />
        </header>
    )
}

export default Header;