import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /*This is a stateful component. when we use state than it is stateful, 
  these components usage must be reduced to make a better understanding of the code */

  state ={
    persons:[
      {name: "madara",age :40 },
      {name :"naruto", age:24},
      {name :"sasuke", age: 25}
    ],
    otherState: "not used"
  }
  /*switch name handler is how we modify a name when we press the switch.
  It is a one way binding where we just change the name by pressing switch. */ 

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
    /*sample example of how we perform the inline styling. 
    Inline styling is basically adding css in the javascript file instead of creating a new app.css file*/
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    }
    /*In here we use person component that is imported from the persons folder.
    switchHandler is how we use a oneway binding. nameChangeHandler is a classic example of two way binding*/
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
