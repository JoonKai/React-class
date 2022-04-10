import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import Cost from './screens/Cost';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cost" element={<Cost/>}/>
        </Routes>
      </Router>
  );
}

export default App;
