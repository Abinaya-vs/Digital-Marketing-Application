import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SigninForm from './Components/SigninForm/SigninForm';


function App() 
{
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginForm/>}></Route>
    <Route path='/SigninForm' element={<SigninForm/>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
