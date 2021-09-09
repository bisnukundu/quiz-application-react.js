import Bisnu from '../styles/Question.module.css';
import QAnswer from './QAnswer';
import Bisnu2 from '../styles/Answer.module.css';
export default function () {
    return (
        <>
            <div className={Bisnu.question}>
                <div className={Bisnu.qtitle}>
                    <span className="material-icons-outlined"> help_outline </span>
                    Here goes the question from Learn with Sumit?
                </div>
                <div class={Bisnu2.answers}>
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                    <QAnswer id="1" text="This is Test Q answer" />
                </div>
            </div>
        </>
    )
}