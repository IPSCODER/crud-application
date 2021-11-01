import React, { Component } from 'react';
import Add from './Add';
import VIEWUSER from './viewuser.container';

class HOMECOMPONENT extends Component {

    state = {
        rowsData:[
            {name:'pravin1', cocktail:'malta', points:'101'},
            {name:'pravin2', cocktail:"santra", points:'102'},
            {name:'pravin3', cocktail:'sonfee', points:'103'}
        ],
        editData:false
    }

    constructor() {
        super();
      }


    componentDidMount(){
        // this.getAllAPI();
    }

   
    editUser = async (userdata, index)=>{

        // console.log(userdata, index); 
        userdata.index = index

        this.setState({editData: userdata});
    }


    addUser = async (event)=>{
        const user ={
            name: event.name,
            cocktail: event.cocktail,
            points: event.points
        }

        if (event.isUpdate) {        
            const newArray = Array.from(this.state.rowsData);
            const index = this.state.editData.index;
            newArray[index].name =user.name;
            newArray[index].cocktail =user.cocktail;
            newArray[index].points =user.points;
            this.setState({rowsData: newArray});

        }else{
            this.setState({ rowsData: [...this.state.rowsData, user], editData: false }) //simple value
        }
        
    console.log(event);
        // console.log(user);
        // 

    }

    reset = async()=>{
        this.setState({editData : false})
    }

    deleteUser = async (index)=>{
        const reducedArr = [...this.state.rowsData];
        reducedArr.splice(index, 1);    
        this.setState({rowsData: reducedArr});
    }

    updateUser = async (event)=>{

        event.preventDefault();
        const data = new FormData(event.target);

        const user ={
            name: data.get('name'),
            cocktail: data.get('cocktail'),
            points: data.get('points')
        }
        
      
    }
    render() {
     
        return (

            <div id="flex">
                 <Add addUser= {this.addUser} isEdit={this.state.editData} reset={this.reset}/>
                 <VIEWUSER userData={this.state.rowsData} deleteuser={this.deleteUser} editUser={this.editUser} />
            </div>


        );
    }
}


export default HOMECOMPONENT;