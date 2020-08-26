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
    otherState: "not used",
    showPersons: false
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

  togglePersonHandler =() => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons : !doesShow})

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

    /*method-2 of toggling.method-1 at bottom.*/

    let persons =null;

    if(this.state.showPersons === true){

      persons= ( 
                <div>
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
                  /> 
              </div>
              );  
    }

      /* SwitchnameHandler is used to modify the name when necessary. 
      But it is a one way binding example where the name is modified through hard coding*/

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
          <button
              onClick= {this.togglePersonHandler}
              style={style}>toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;

/*Method - 1 of toggling: paste this in the return statement  but this method makes it more complicated.
{ this.state.showPersons === true ? 
              <div>
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
                /> 
            </div> : null
        }
        */
