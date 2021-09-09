import { Link } from 'react-router-dom';
import ButtonStyle from '../styles/Button.module.css';
import Bisnu from '../styles/ProgresBar.module.css';
export default function Progressbar() {
    return (
        <div className={Bisnu.progressBar}>
            <div className={Bisnu.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={Bisnu.rangeArea}>
                <div className={Bisnu.tooltip}>24% Cimplete!</div>
                <div className={Bisnu.rangeBody}>
                    <div className={Bisnu.progress} style={{ width: '20%' }}></div>
                </div>
            </div>
            <Link to="/result">
                <button className={`${ButtonStyle.button} ${Bisnu.next}`} >
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </button>
            </Link>
        </div>
    )
}