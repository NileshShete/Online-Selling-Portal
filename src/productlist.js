import { TableBody, TableCell, TableHead, TableRow,Table } from "@material-ui/core";
import React, { Component } from "react";
import "./new.css"

class Productlist extends Component{

    constructor(){
        super()
        this.state={

            list:[""],
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/posts")
        .then((response)=>{
            response.json().then((result=>{
                this.setState({list:result})
            }
             ))
        })
    }

    render(){
        return(
            <div className="hello1">
                {

                    this.state.list.lenght===0
                    ? "plz Wait"
                    : this.state.list.map((b)=>
                    <div>
                        <Table>
                <TableHead  >
                    <TableRow >
                                    <TableCell >Product name</TableCell>
                                    <TableCell>Name of Company</TableCell>
                                    <TableCell>Price</TableCell>
                                </TableRow>
                                </TableHead>
                            
                                <TableRow>
                                    <TableCell><span>{b.name}</span></TableCell>
                                    <TableCell><span>{b.cname}</span></TableCell>
                                    <TableCell><span>{b.price}</span></TableCell>
                                </TableRow>
                               
                            
                         
                        </Table>
                        </div>
                    )
                }

                    
            </div>
        )
    }
}export default Productlist;