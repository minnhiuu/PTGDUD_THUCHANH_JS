import React from "react";
const DisplayInfo = (props) => {

    // template + logic js
    const { listUsers } = props



    return (
        <div className="display-info-user">
            {/* <img src={logo} /> */}


            <>
                {listUsers.map((user) => {
                    return (
                        <React.Fragment key={user.id
                        }>
                            <div className={user.age > 18 ? "green" : "red"} >
                                <div>My name {user.name}</div>
                                <div>My age {user.age}</div>
                                <div>My address {user.address}</div>
                            </div>
                            <hr />
                        </React.Fragment>
                    )
                })}
            </>

        </div>
    )
}

export default DisplayInfo;