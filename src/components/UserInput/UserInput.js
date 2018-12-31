import React from 'react';

const UserInput = (props) => {

    const style = {
        backgroundColor: 'white',
        width: '200px',
        margin: '10px auto',
        textAlign: 'center',
        border: '1px solid #ccc',
        color: 'black',
        padding: '5px'

    };

    return(
        <input type='text' onChange={props.changeHandler} value={props.value} style={style}/>
    );

};

export default UserInput;
