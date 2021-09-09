import Bisnu from '../styles/Summary.module.css';
import successImg from '../assets/images/success.png'
export default function Summary() {
    return (
        <div className={Bisnu.summary}>
            <div className={Bisnu.point}>
                <p className={Bisnu.score}>
                    Your score is <br />
                    5 out of 10
                </p>
            </div>

            <div className={Bisnu.badge}>
                <img src={successImg} alt="Success" />
            </div>
        </div>
    )
}