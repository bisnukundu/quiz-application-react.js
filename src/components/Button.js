import Bisnu from '../styles/Button.module.css';
export default function Button({text}) {
    return (
        <div className={Bisnu.button}>
            <span>{text}</span>
        </div>
    )
}