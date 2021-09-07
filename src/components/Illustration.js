import Bisnu from '../styles/Illustration.module.css'
export default function Illustration({...rest}) {
    return (
        <div class={Bisnu.illustration}>
            <img {...rest}/>
        </div>
    )
}