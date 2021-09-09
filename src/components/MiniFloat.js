import Bisnu from '../styles/MiniFloat.module.css';
export default function MiniFloat() {
    return (
        <div className={`${Bisnu.miniPlayer} ${Bisnu.floatingBtn}`}>
            <span className={`material-icons-outlined ${Bisnu.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined ${Bisnu.close}`}> close </span>
            <img src="./images/3.jpg" alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div >
    )
}