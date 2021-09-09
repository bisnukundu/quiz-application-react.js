import Bisnu from '../styles/Illustration.module.css'
export default function Illustration({...rest}) {
    return (
        <div className={Bisnu.illustration}>
            <img alt="img" {...rest}/>
        </div>
    )
}