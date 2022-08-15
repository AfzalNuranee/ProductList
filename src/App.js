import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes,Link } from 'react-router-dom';
import Dashboard from './dashboard';
import Addnewproduct from './addnewproduct';
import Editproduct from './editproduct';
import Mainheader from './mainheader';


function App() {
  const items = [];

  return (
    <>
    <HashRouter>
    {/* <Dashboard/> */}
      <Mainheader/>
       <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
          <Route exact path="/addnewproduct" element={<Addnewproduct/>}></Route>  
          <Route exact path="/editproduct/:pid" element={<Editproduct/>}></Route>  
           
      </Routes> 
    </HashRouter>
      
    </>
  );
}

export default App;
