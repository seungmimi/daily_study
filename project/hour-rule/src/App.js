import styles from './Component/css/App.module.css';

import Title from './Component/Title'; 
import Main from './Component/Main';
import Footer from './Component/Footer';
import Modal from './Component/Modal';
import { useState } from 'react';

function App() {

  const [modalShow, setModalShow] = useState(false);

  

  return (
    <div className={styles.container}>
        <div className={styles.contentArea}>
          <Title />
          <Main setModalShow = {setModalShow}/>
          <Footer />
          {modalShow ? <Modal setModalShow = {setModalShow}/> : null};
        </div>
    </div>
  );
}
export default App;
