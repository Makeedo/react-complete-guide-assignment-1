import React from 'react';

const UserOutput = (props) => {

    return(
        <div>
            <p>This is a UserOutput component</p>
            <p>UserName = {props.userName}</p>
        </div>
    );

};

export default UserOutput;
