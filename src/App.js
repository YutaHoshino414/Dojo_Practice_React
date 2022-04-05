import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogDetail from './BlogDetail';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
        <Routes> {/* react-router : version 6 */}
          <Route path="/" element={<Home />} /> 
          <Route path="/create" element={<Create />} /> 
          <Route path="/blogs/:id" element={<BlogDetail />} /> 
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
