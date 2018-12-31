import React from 'react';

const UserInput = (props) => {

    return(
        <input type='text' onChange={props.changeHandler} />
    );

};

export default UserInput;
