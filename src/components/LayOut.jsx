import styles from "./LayOut.module.scss";
import Header from "./Header";
import SideBar from "./SideBar";

const LayOut = ({ children }) => {
  return (
    <div className={styles.AppWrapper}>
        <SideBar />
        <div className={styles.mainContent}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    </div>
  )
}

export default LayOut