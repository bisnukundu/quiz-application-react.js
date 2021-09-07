import Layout from "../components/Layout"
import Form from "../components/Form"
import Illustration from "../components/Illustration"
import LoginImg from '../assets/images/login.svg';
import Button from '../components/Button'
import Input from "../components/Input"
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <Layout>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration src={LoginImg} alt="Signup" />
                <Form action="#" style={{ height: "330px" }}>
                    <Input type="email" placeholder="Enter email" icon="alternate_email" />
                    <Input type="password" placeholder="Enter password" icon="lock" />
                    <Button text="SUBMIT NOW" />
                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </Layout>
    )
}