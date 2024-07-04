import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Registtration from './Registration/Registtration';
import { Route, Routes } from 'react-router-dom';
import Verifyotp from './Registration/Verifyotp';
import Emailverify from './Registration/Emailverify';
import Welcome from './Registration/Welcome';
function App() {
  return (
    <>

      <Routes>
        {/* <Login /> */}
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registtration />} />
        <Route path='/verifyotp/:email' element={<Verifyotp />} />
        <Route path='/upload/' element={<Emailverify />} />
        <Route path='/welcome' element={<Welcome />} />


      </Routes>

    </>
  );
}

export default App;
