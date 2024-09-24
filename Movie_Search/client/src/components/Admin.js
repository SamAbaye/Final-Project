import React, { useState, useEffect } from 'react';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
const Admin = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const handleRefresh = () => {
            setRefreshKey(prevKey => prevKey + 1);
        };

        window.addEventListener('load', handleRefresh);

        return () => {
            window.removeEventListener('load', handleRefresh);
        };
    }, []);

    return (
        <div className="admin vh-100 vw-50 m-2 text-center bg-light ">
            <Add key={`add-${refreshKey}`} />
            <Delete key={`delete-${refreshKey}`} />
            <Edit key={`edit-${refreshKey}`} />
        </div>
    );
};

export default Admin;
