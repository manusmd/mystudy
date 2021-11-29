import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
