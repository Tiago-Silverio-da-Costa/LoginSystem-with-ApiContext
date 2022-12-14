import { useContext } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext)


  const handleLogout = async() => {
    await auth.signout()
    window.location.href = window.location.href
  }

  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página privada</Link>
          {
          auth.user 
          && 
          <button 
          onClick={handleLogout}
          >Sair</button>}
        </nav>
      </header>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
