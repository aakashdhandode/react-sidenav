import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Sidebar>
            <Routes>
               <Route path='/' element={<Dashboard />} />
               <Route path='/dashboard' element={<Dashboard />} />
               <Route path='/about' element={<About />} />
            </Routes>
            </Sidebar>
        </BrowserRouter>
    </div>
  );
}

export default App;
