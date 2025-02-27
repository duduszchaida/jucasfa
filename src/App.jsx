import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Querigma from './querigma';
import Principal from './components/principal';
import Header from './components/header';
import Footer from './components/footer';
import 'primereact/resources/themes/saga-blue/theme.css'; // tema primereact
import 'primereact/resources/primereact.min.css'; // componentes primereact
import 'primeicons/primeicons.css'; // ícones primereact
import Torneio from './torneio';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/querigma" element={<Querigma />} />
        <Route path="/torneio" element={<Torneio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
