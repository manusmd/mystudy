import { Routes, Route } from 'react-router';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
