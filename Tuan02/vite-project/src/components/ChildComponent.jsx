import React from "react";

class Childcomponent extends React.Component {
    state = {
        name: "",
        age: 0,
        address: ""
    }
    handleClick(id, name, age) {
        this.props.handleAddNewUser({
            id: id,
            name: name,
            age: age
        });
    }
    handleInput = (event) => {
        //console.log(event.target.value);
        this.setState({//hiển thị đúng giá trị được nhập vào
            valueInput: event.target.value
        })
    }
    handleOnchangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleOnchangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }
    handleOnchangeAddress(event) {
        this.setState({
            address: event.target.value
        })
    }
    render() {
        return (
            <>
                My name is {this.state.name}, i am {this.state.age} year old, i live in {this.state.address}
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    /> <br />
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    /><br />
                    <label>Your address:</label>
                    <input
                        value={this.state.address}
                        type="text"
                        onChange={(event) => this.handleOnchangeAddress(event)}
                    />
                    <button type="button" onClick={(event) => { this.handleClick(this.state.address, this.state.name, this.state.age) }}>on click</button>
                </form>
            </>
        );
    }

}

export default Childcomponent;
