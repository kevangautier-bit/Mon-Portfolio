import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Parcours from './pages/Parcours';
import CV from './pages/CV';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}
