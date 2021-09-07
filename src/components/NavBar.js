import Bisnu from '../styles/NavBar.module.css';
import Logo from '../assets/images/logo-bg.png';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className={Bisnu.nav}>
            <ul>
                <li>
                    <Link to="/" className={Bisnu.brand}>
                        <img src={Logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <div className={Bisnu.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <Link to="/signup">Signup</Link>
                {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
            </div>
        </nav>
    )
}