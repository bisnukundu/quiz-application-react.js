import Bisnu from '../styles/Answer.module.css'
export default function Answer({ text, id, className }) {
    return (
        <label className={`${Bisnu.answer} ${className}`} htmlFor={id}>
            <input type="checkbox" id={id} />
            {text}
        </label>
    )
}