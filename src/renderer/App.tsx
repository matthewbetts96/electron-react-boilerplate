import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Canvas from './components/Canvas';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Canvas draw={undefined} />} />
      </Routes>
    </Router>
  );
}
