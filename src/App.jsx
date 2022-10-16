import './App.css';
import './fonts.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Landing from './routes/Landing';
import Login from './routes/Login';
import SignUp from './routes/SignUp';

function App() {
  return (
    <Router className='flex w-full inter'>
      <Routes>
        <Route exact path='/' element={<Landing />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
