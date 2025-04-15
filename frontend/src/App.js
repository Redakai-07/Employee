import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Employee from './Components/Employee/Employee';
import Login from './Components/Login/Login';
import IndexCeo from './Components/CEO/Index/IndexCeo';
import RegisterCeo from './Components/CEO/Register/RegisterCeo';
import ShowHR from './Components/CEO/ShowHR/ShowHR';
import IndexHR from './Components/HR/IndexHR/IndexHR';
import RegisterHR from './Components/HR/RegisterHR/RegisterHR';
import ShowAsstHR from './Components/HR/ShowAsstHR/ShowAsstHR';
import SubmitEmp from './Components/HR/SubmitEmp/SubmitEmp';
import IndexAsstHR from './Components/AsstHR/IndexAsstHR/IndexAsstHR';
import RegisterManger from './Components/AsstHR/RegisterManager/RegisterManger';
import ShowManager from './Components/AsstHR/ShowManager/ShowManager';
import VerifyEmp from './Components/AsstHR/VerifyEmp/VerifyEmp';
import Manager from './Components/Manager/Manager';
import Common from './Components/Common/Common';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/employee' element={<Employee />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/ceo-login' element={<IndexCeo />}/>
          <Route path='/ceo-register' element={<RegisterCeo />}/>
          <Route path='/showHr' element={<ShowHR />}/>
          <Route path='/hr-login' element={<IndexHR />}/>
          <Route path='/hr-register' element={<RegisterHR />}/>
          <Route path='/showAsstHr' element={<ShowAsstHR />}/>
          <Route path='/submit' element={<SubmitEmp />}/>
          <Route path='/asst-login' element={<IndexAsstHR />}/>
          <Route path='/asst-register' element={<RegisterManger />}/>
          <Route path='/show-manager' element={<ShowManager />}/>
          <Route path='/verify' element={<VerifyEmp />}/>
          <Route path='/manager-login' element={<Manager />}/>
          <Route path='/details' element={<Common />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
