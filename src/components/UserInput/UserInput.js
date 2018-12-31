import React from 'react';

const UserInput = (props) => {

    return(
        <input type='text' onChange={props.changeHandler} value={props.value}/>
    );

};

export default UserInput;
