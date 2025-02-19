import React, { Component } from 'react'

export default class DisplayInfo extends Component {
    render() {
        const { listUser } = this.props;
        console.log(listUser)
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>//mỗi phần tử trên trang hải là duy nhất
                            <div>My name is: {user.Name}</div>
                            <div>My Age: {user.Age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }

}
