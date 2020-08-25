import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p1>my name is {props.name} and my age is {props.age} </p1>
            <p1>{props.children}</p1>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>    
    );

}

export default Person;