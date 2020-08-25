import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {name: "madara",age :40 },
      {name :"naruto", age:24},
      {name :"sasuke", age: 25}
    ],
    otherState: "not used"
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked !")
    this.setState( {
        persons: [ 
          {name: "uchiha",age :40 },
          {name: newName, age:24},
          {name: "sasuke", age:25}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    //console.log("was clicked !")
    this.setState( {
        persons: [ 
          {name: "madara",age :40 },
          {name: "naruto", age:24},
          {name: event.target.value, age:25}
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    }
    return (
      <div className="App">
         <h1> hi my name is nitish</h1> 
         <p>working on React</p>
         <button 
            onClick= {this.switchNameHandler.bind(this, 'itachi')}
            style={style}>Switch Name</button>
        
         <Person  
            name = {this.state.persons[0].name}
            age ={this.state.persons[0].age} 
          />
         <Person 
            name= {this.state.persons[1].name} 
            age ={this.state.persons[1].age} />
         <Person  
            name = {this.state.persons[2].name} 
            age ={this.state.persons[2].age}
            changed ={this.nameChangedHandler} 
          />
      </div>
    );
  }
}

export default App;
