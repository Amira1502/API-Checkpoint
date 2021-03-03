//CSS
import './App.css';
//import  route
import { Route, Switch } from 'react-router-dom';

//import component
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import UserList from "./Components/UserList/UserList";
import User from './Components/User/User'
import error from './Assets/error.png'


function App() {
  return (
    <div className="App">
      {/* navbar */} 
      <Navbar/>  
       {/* route */} 
       <Switch>
         <Route exact path='/' component ={Home}/>
         <Route exact path='/users' component={UserList} />
        <Route path='/users/user/:id' component={User} />
         <Route path='/*' component={() => <img src={error} alt="error" style={{ width: '40%' }} />} />
       </Switch>
    </div>
  );
}

export default App;
