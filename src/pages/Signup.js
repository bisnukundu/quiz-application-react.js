import Layout from "../components/Layout"
import Form from "../components/Form"
import Illustration from "../components/Illustration"
import SignImg from '../assets/images/signup.svg';
import Checkbox from "../components/Checkbox"
import Button from '../components/Button'
import Input from "../components/Input"


export default function Signup() {
    return (
        <Layout>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration src={SignImg} alt="Signup" />
                <Form action="#">
                    <Input type="text" placeholder="Enter name" icon="person" />
                    <Input type="email" placeholder="Enter email" icon="alternate_email" />
                    <Input type="password" placeholder="Enter password" icon="lock" />
                    <Input type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button text="SUBMIT NOW" />
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </Layout>
    )
}