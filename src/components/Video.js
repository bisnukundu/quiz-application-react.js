import Bisnu from '../styles/Video.module.css';
import Thumble from '../assets/images/3.jpg';
export default function Video() {
    return (
        <>
            <a href="quiz.html"
            ><div className={Bisnu.video}>
                    <img src={Thumble} alt="Video title" />
                    <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                    <div className={Bisnu.qmeta}>
                        <p>10 Questions</p>
                        <p>Score : Not taken yet</p>
                    </div>
                </div>
            </a>
        </>
    )
}