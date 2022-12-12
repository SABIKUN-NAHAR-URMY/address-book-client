import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableData = ({data}) => {
    const navigate = useNavigate();
    const handelUpdate = id =>{
        navigate(`/updateData/${id}`);
    }
    return (
        <div>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>Delete</td>
            <td><button onClick={()=>handelUpdate(data._id)}>Update</button></td>
        </div>
    );
};

export default TableData;