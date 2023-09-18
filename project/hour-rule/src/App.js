import styles from './Component/css/App.module.css';

import Title from './Component/Title'; 
import Main from './Component/Main';
import Footer from './Component/Footer';
import Modal from './Component/Modal';

function App() {
  return (
    <div className={styles.container}>
        <div className={styles.contentArea}>
          <Title />
          <Main />
          <Footer />
          {/* <Modal /> */}
        </div>
    </div>
  );
}
export default App;
