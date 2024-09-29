import React, { useState } from 'react';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState(''); // Tracks which component to show

    return (
        <div className="h-75 text-center p-5 bg-light align-content-center">
            <div className="mb-3">
                {/* Buttons to switch between components */}
                <button onClick={() => setActiveComponent('add')} className="btn btn-primary mx-2">Add</button>
                <button onClick={() => setActiveComponent('delete')} className="btn btn-danger mx-2">Delete</button>
                <button onClick={() => setActiveComponent('edit')} className="btn btn-warning mx-2">Edit</button>
            </div>

            {/* Conditionally render the component based on the selected button */}
            {activeComponent === 'add' && <Add />}
            {activeComponent === 'delete' && <Delete />}
            {activeComponent === 'edit' && <Edit />}
        </div>
    );
};

export default Admin;
