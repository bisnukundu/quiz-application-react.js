import Bisnu from '../styles/NavBar.module.css';
import Logo from '../assets/images/logo-bg.png';
export default function NavBar() {
    return (
        <nav className={Bisnu.nav}>
            <ul>
                <li>
                    <a href="index.html" className={Bisnu.brand}>
                        <img src={Logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <div className={Bisnu.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <a href="signup.html">Signup</a>
                {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
            </div>
        </nav>
    )
}