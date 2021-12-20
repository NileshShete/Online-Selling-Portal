import React, { Component } from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Dashbord from "./dashbord";
import Createproduct from "./createproduct";
import Productlist from "./productlist";
import {AppBar, Button, TextField, Toolbar} from "@material-ui/core"

function App(){
        return(
            <div>
              
            <Router>
            <AppBar variant="outlined" color="default">
                    <Toolbar>
            

             <Link to="/dashbord"> <Button variant="outlined" color="primary" >DASHBORD</Button></Link>

            <Link to="/createproduct"> <Button variant="outlined" color="primary" >CREATE PRODUCT</Button></Link>

            <Link to="/productlist"> <Button variant="outlined" color="primary">PRODUCT LIST</Button></Link>

            </Toolbar>
             </AppBar>
            
            <Route path="/dashbord" component={Dashbord}/>

            <Route path="/createproduct" component={Createproduct} />
            <Route path="/productlist" component={Productlist} />
            
             </Router>
             
            </div>    
        )
    }
export default App;

