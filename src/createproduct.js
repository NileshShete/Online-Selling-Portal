import React, { Component } from "react";
import {AppBar, Button, TextField, Toolbar} from "@material-ui/core"
import "./new.css"

class Createproduct extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            cname:"",
            price:""
        }
    }
    
    hello(){
        fetch("http://localhost:3000/posts",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((response)=>{response.json()
        .then((a)=>{
            alert("Product Created Successfully")
        })
        })
    }
    render(){
        return(
            <div>
               
        <div className="hello1">
        <p>Enter the product details</p> 
        <TextField label="Name" onChange={(e)=>{this.setState({name:e.target.value})}}></TextField>
        <TextField label="Company" onChange={(e)=>{this.setState({cname:e.target.value})}} className="hello2" ></TextField>
        <TextField label="Price" onChange={(e)=>{this.setState({price:e.target.value})}} className="hello5" ></TextField><br></br><br></br>
        </div>
        <div className="hello3">
          <Button onClick={()=>this.hello()} variant="outlined" color="primary" >SAVE</Button>
          <Button variant="outlined" color="secondary" className="hello4">SAVE DRAFT</Button>
        </div>               
            </div>
        )
    }
}export default Createproduct;