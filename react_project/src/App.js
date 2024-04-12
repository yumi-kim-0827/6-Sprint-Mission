import Market from './page/Market';
import Nav from './components/Nav';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrap}>
      <Nav />
      <Market />
    </div>
  );
}

export default App;
