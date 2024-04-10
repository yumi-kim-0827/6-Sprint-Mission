import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyles';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
