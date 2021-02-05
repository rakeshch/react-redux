import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
    state={
        name: '',
        age:''
    }

    onNameChangedHandler=(event)=>{
        this.setState({ name: event.target.value });
    }

    onAgeChangedHandler=(event)=>{
        this.setState({ age: event.target.value });
    }

    render(){
        return (
            <div className="AddPerson">
                <input type='text' placeholder='Enter Name' onChange={this.onNameChangedHandler}/>
                <input type='text' placeholder='age' onChange={this.onAgeChangedHandler}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
};

export default addPerson;
