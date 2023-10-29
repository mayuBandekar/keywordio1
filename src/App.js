import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import CreateAdds from './components/pages/CreateAdds';
import CreateTextMedia from './components/pages/CreateText&Media';
import CreateText from './components/pages/CreateText';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/createAdds' element={<CreateAdds />} />
        <Route path='/createTextMedia' element={<CreateTextMedia />} />
        <Route path='/createText' element={<CreateText />} />
      </Routes>
    </Router>
  );
}

export default App;
