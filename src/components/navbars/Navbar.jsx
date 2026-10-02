import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <a href="#about">
                        <span></span>
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <span></span>
                        <span>Experience</span>
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <span></span>
                        <span>Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;