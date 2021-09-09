import Bisnu from '../styles/Input.module.css';
export default function Input({icon,...rest}) {
    // console.log(...rest);
    return (
        <div className={Bisnu.textInput}>
            <input {...rest}/>
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    )
}