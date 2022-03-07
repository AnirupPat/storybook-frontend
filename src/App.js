import styles from "./App.module.scss";
import LeftNav from "./modules/home/components/leftNav/LeftNav";
import Main from "./modules/home/components/main/Main";
import RightNav from "./modules/home/components/rightNav/RightNav";

function App() {
  return (
    <div className={styles.app}>
      <LeftNav />
      <Main />
      <RightNav />
    </div>
  );
}

export default App;
