import styles from './Component/css/App.module.css';

import Title from './Component/Title'; 
import Main from './Component/Main';
function App() {
  return (
    <div className={styles.container}>
        <div className={styles.contentArea}>
          <Title />
          <Main />
        </div>
    </div>
  );
}
export default App;
