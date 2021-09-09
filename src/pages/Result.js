import Layout from "../components/Layout";
import Question from "../components/Question";
import Summary from "../components/Summary";
import Bisnu from '../styles/Analysis.module.css';

export default function Result() {
    return (
        <Layout>
            <Summary />
            <div className={Bisnu.analysis}>
                <h1>Question Analysis</h1>
                <h4>You answerd 5 out of 10 questions correctly</h4>
                <Question />
            </div>
        </Layout >

    )
}