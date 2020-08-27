import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /*This is a stateful component. when we use state than it is stateful, 
  these components usage must be reduced to make a better understanding of the code */

  state ={
    persons:[
      {id:"m4", name: "madara",age :40 },
      {id:"n2", name :"naruto", age:24},
      {id :"s2",name :"sasuke", age: 25}
    ],
    otherState: "not used",
    showPersons: false
  }


  deletePersonHandler =(personIndex)=> {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler =() => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons : !doesShow})

  }

  nameChangedHandler = (event, id) => {
    //console.log("was clicked !")
    const personIndex =this.state.persons.findIndex(p => {
      return p.id =id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };

    person.name =event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] =person;


    this.setState( { persons: persons})
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


    /*deleting the persons on click by using the delete person handler
    In here we are outputting the list through the use of map function.*/
    
    let persons =null;

    if (this.state.showPersons){

     persons =( 
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() =>this.deletePersonHandler(index)}
                  name={person.name} 
                  age ={person.age}
                  key ={person.id}
                  changed ={(event) => this.nameChangedHandler(event, person.id)}/>
                })}
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
              onClick= {this.togglePersonHandler}
              style={style}>toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
