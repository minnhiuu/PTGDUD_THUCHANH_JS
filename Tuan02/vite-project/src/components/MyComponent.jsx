import React from "react";
import Childcomponent from './Childcomponent';
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component {
    state = {
        listUsers: [
            { name: "thien", age: 20, address: "tay ninh" },
            { name: "thien 1", age: 21, address: "tay bac" },
            { name: "hehe", age: 10, address: "ca mau" },
        ]
    }
    handleAddNewUser = (userObject) => {
        // Them 1 user vao state
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]

        })
    }
    render() {
        return (
            <div>
                <Childcomponent handleAddNewUser={this.handleAddNewUser}></Childcomponent>
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    removeUser={this.removeUser}

                />
            </div>

        );
    }
}
export default Mycomponent;
