import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './components/Employee';
import Home from './pages/Home';
import Navigation from './components/layout/Navigation';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import About from './pages/About';

function App() {

  
  return (
    <Router>
      <div className='App'>
        <Navigation />

        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/employee" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
