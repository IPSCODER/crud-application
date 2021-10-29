/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */

import React, { Component } from 'react';
import Add from './Add';
import VIEWUSER from './viewuser.container';

class HOMECOMPONENT extends Component {

    state = {
        rowsData:[
            {name:'pravin1', cocktail:'abc1', points:'101'},
            {name:'pravin2', cocktail:'abc2', points:'102'},
            {name:'pravin3', cocktail:'abc3', points:'103'},
            {name:'pravin4', cocktail:'abc4', points:'104'},
            {name:'pravin5', cocktail:'abc5', points:'105'},
            {name:'pravin6', cocktail:'abc6', points:'106'}
        ]
    }

    constructor() {
        // // window.scrollTo(0, 0);
        super();
        // this.registerUser = this.registerUser.bind(this);
      }


    componentDidMount(){
        // this.getAllAPI();
    }

   


    addUser = async (event)=>{

        event.preventDefault();
        const data = new FormData(event.target);

        const user ={
            name: data.get('fname'),
            cocktail: data.get('cocktail'),
            points: data.get('points')
        }
    
        console.log(user);
        this.setState({ rowsData: [...this.state.rowsData, user] }) //simple value


    }

    updateUser = async (event)=>{

        event.preventDefault();
        const data = new FormData(event.target);

        const user ={
            name: data.get('fname'),
            cocktail: data.get('cocktail'),
            points: data.get('points')
        }
        
        this.setState({
            data: this.state.data.map(el => (el.id === id ? Object.assign({}, el, { text }) : el))
          });
        console.log(user);
        this.setState({ rowsData: [...this.state.rowsData, user] }) //simple value


    }
    render() {
     
        return (

            <div id="flex">
                 <Add addUser= {this.addUser}/>
                 <VIEWUSER userData={this.state.rowsData} />
            </div>


        );
    }
}


export default HOMECOMPONENT;