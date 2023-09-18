import styles from './Component/css/App.module.css';

import Title from './Component/Title'; 
import Main from './Component/Main';
import Footer from './Component/Footer';
function App() {
  return (
    <div className={styles.container}>
        <div className={styles.contentArea}>
          <Title />
          <Main />
          <Footer />
        </div>
    </div>
  );
}
export default App;
