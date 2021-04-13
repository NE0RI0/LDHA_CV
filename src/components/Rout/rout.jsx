import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/home";
import Python_info from '../python/python_info';
import React_info from '../reactjs/react_info';
import CPP_info from '../c_cpp/c_cpp';

function Rout(){
    return(
      <div className="App">
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/python' component={Python_info}/>
            <Route exact path='/react' component={React_info}/>
            <Route exact path='/c' component={CPP_info}/>
        </Router>
        </div>
    )
}

export default Rout;