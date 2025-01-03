import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyForm from './components/MyForm';
import MyFunction from './components/MyFunction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyForm />} />
        <Route path='/function' element={<MyFunction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
