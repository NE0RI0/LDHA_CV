import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import Home from "../home/home";
import Python_info from '../python/python_info';
import React_info from '../reactjs/react_info';
import CPP_info from '../c_cpp/c_cpp';
import CV_info from '../cv/cv'
import React from "react";

function Rout(){
    return(
      <div className="App">
          {/* <React.StrictMode>
            <HashRouter></HashRouter> */}
            <React.StrictMode>
                <HashRouter>
                    <Router>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/python' component={Python_info}/>
                        <Route exact path='/web' component={React_info}/>
                        <Route exact path='/hardware' component={CPP_info}/>
                        <Route exact path='/cv' component={CV_info} />
                    </Router>
                </HashRouter>
            </React.StrictMode>
        </div>
    )
}

export default Rout;