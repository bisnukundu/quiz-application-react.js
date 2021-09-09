import Bisnu from '../styles/Video.module.css';
import Thumble from '../assets/images/3.jpg';
import { Link } from 'react-router-dom';
export default function Video() {
    return (
        <>
            <Link to="/quiz"
            ><div className={Bisnu.video}>
                    <img src={Thumble} alt="Video title" />
                    <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                    <div className={Bisnu.qmeta}>
                        <p>10 Questions</p>
                        <p>Score : Not taken yet</p>
                    </div>
                </div>
            </Link>
        </>
    )
}