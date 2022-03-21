import logo from './logo.svg';
// import './App.css';
// import "./App.scss";
import styles from "./App.module.css";

import Button from './components/Button'

console.log(styles);
// { 형식: (우리가 사용하는)실제 key:[filename]_[classname]__[hash]
//   App: "App_App__Vwa6h" 
//   App-header: "App_App-header__sA7RO"
//   App-link: "App_App-link__gOwq-"
//   App-logo: "App_App-logo__ABdGL"
//   App-logo-spin: "App_App-logo-spin__q5hBl"
// }

// module.css파일을 import하면
// classname이 App으로 들어가면 안되고 js의 표현식이 들어가야 한다!!!!!!!  ==> 오염되지 않게 사용
// 1. className={styles.App}    또는   2. className={styles["App"]} 

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
