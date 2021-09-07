import Bisnu from '../styles/Form.module.css'

export default function Form({children,...rest}) {
    return (
        <form className={`${Bisnu.signup} ${Bisnu.form}`} {...rest}>
           {children}
        </form>
    )
}