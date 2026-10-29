import './navbar.css';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useActiveSection } from '../../hooks/useActiveSection';

const Navbar = () => {
    const activeSection = useActiveSection(['about','experience','projects']);
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavHashLink className={activeSection == 'about' ? 'selected' : ''} smooth to="/#about">
                        <span></span>
                        <span>Обо мне</span>
                    </NavHashLink> 
                </li>
                <li>
                    <NavHashLink className={activeSection == 'experience' ? 'selected' : ''} smooth to="/#experience">
                        <span></span>
                        <span>Опыт работы</span>
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink className={activeSection == 'projects' ? 'selected' : ''} smooth to="/#projects">
                        <span></span>
                        <span>Проекты</span>
                    </NavHashLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;