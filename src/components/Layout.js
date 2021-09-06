import NavBar from "./NavBar";
import Bisnu from "../styles/Layout.module.css";
export default function Layout({children}) {

    return (
        <>
            <NavBar />
            <main className={Bisnu.main}>
                <div className={Bisnu.container}>
                    {children}
                </div>
            </main>
        </>
    );
}