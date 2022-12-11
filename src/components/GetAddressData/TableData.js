import React from 'react';

const TableData = ({data}) => {
    console.log(data);
    return (
        <div>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>Delete</td>
            <td>Update</td>
        </div>
    );
};

export default TableData;