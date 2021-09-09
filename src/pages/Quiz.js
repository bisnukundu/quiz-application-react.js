import Answer from "../components/Answer";
import Layout from "../components/Layout";
import MiniFloat from "../components/MiniFloat";
import Progressbar from "../components/Progressbar";
import Bisnu from '../styles/Answer.module.css';
export default function Quiz() {
    return (
        <Layout>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <div className={Bisnu.answers}>
                <Answer className="" id="dfs" text="This is a answer" />
                <Answer className={Bisnu.wrong} id="dfs2" text="This is a answer" />
                <Answer className="" id="dfs3" text="This is a answer" />
                <Answer className="" id="dfs5" text="This is a answer" />
                <Answer className="" id="dfs6" text="This is a answer" />
                <Answer className={Bisnu.correct} id="df8s" text="This is a answer" />
                <Answer className="" id="df34s" text="This is a answer" />
                <Answer className="" id="dfs53" text="This is a answer" />
                <Answer className="" id="5dfs" text="This is a answer" />
                <Answer className="" id="2dfs" text="This is a answer" />
            </div>
            <Progressbar />
            <MiniFloat />
        </Layout>
    )
}