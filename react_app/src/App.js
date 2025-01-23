import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { DashBoard } from './pages/DashBoard';
import { Summary } from './pages/Summary';
import { Text } from './pages/Text';
import { ChatBot } from './pages/ChatBot';
import  Navbar    from './components/Navbar';
   

function App() {
  return (
    <>
        <Navbar/>
        <Routes>

          
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashBoard" element={<DashBoard />}/>
          <Route path="/summary" element={<Summary />}/>
          <Route path="/text" element={<Text />}/>
          <Route path="/chatBot" element={<ChatBot />}/>
        </Routes>
      
    </>
  );
}

export default App;
