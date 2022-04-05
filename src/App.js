import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
        <Routes> {/* react-router : version 6 */}
          <Route path="/" element={<Home />} /> 
          <Route path="/create" element={<Create />} /> 
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
