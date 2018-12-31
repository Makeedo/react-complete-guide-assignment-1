import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {

    return(
        <div className='UserOutput'>
            <p>This is a UserOutput component</p>
            <p>UserName = {props.userName}</p>
        </div>
    );

};

export default UserOutput;
