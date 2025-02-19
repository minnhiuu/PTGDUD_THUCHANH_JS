import React, { Component } from 'react'
import Childcomponent from './Childcomponent';
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';

export default class MyComponent extends Component {
    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 34 },
            { id: 3, Name: "Chien", Age: 32 },
        ]
    }
    render() {
        return (
            <div>
                {/* <UserInfo/> */}
                <hr />
                <DisplayInfo listUser={this.state.listUser}/> 
            </div>
        );
    }

}
