import React, { useState, useEffect } from 'react';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
const Admin = () => {

    return (
        <div className="h-75 text-center p-5 bg-light align-content-center">
            <Add/>
            <Delete/>
            <Edit/>
        </div>
    );
};

export default Admin;
