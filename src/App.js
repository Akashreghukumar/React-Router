import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './pages/home';
import AdminLogin from './pages/admin';
import StudentLogin from './pages/student';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <h1>React Router App</h1>
      <BrowserRouter>

      <div className="link">
      <Link to='/'>Home</Link>
      <Link to='/adminlogin' >Admin Login</Link>
      <Link to='/studentlogin' >Student Login</Link>
<Link to='/aboutus'>About us</Link>
<Link to='/contact'>Contact</Link>


      </div>

      <Route path='/' component={Home} exact/>
      <Route path="/adminlogin" component={AdminLogin}/>
      <Route path="/studentlogin" component={StudentLogin}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path='/contact' component={Contact}/>
      
     
      </BrowserRouter>
    
    </div>
  );
}

export default App;
