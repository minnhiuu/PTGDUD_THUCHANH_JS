import React, { Component } from 'react'

export default class Childcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'abc'
        }
    }
    handleInput = (event) => {
        //console.log(event.target.value);
        this.setState({//hiển thị đúng giá trị được nhập vào
            valueInput: event.target.value
        })
    }

    render() {
        const {myProp , sum}=this.props;
        return (
            <>
            <input value={this.state.valueInput} 
 onChange={(event) => {this.handleInput(event) }} 
 type="text" />
 <div>
            	<span>{this.state.valueInput}</span>
         	</div>


                <h1>
                   call function sum:6+7={sum(6, 7)}
			   //gọi hàm sum từ component cha
                </h1>

            </>
        );
    };



}
