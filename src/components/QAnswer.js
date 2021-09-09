import Bisnu from '../styles/Answer.module.css';
export default function({text,id}){
    return(
        <label className={Bisnu.answer} htmlFor={id}>{text} </label>
    )
}