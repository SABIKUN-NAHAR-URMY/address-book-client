import React, { useEffect, useState } from 'react';
import './GetAddressData.css';
import TableData from './TableData';

const GetAddressData = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        fetch('https://address-book-server-eta.vercel.app/address')
            .then(res => res.json())
            .then(data => {
                setGetData(data);
            })
    }, [])

    return (
        <div className='tableData'>
            <table>
           <tr>
            {
                getData.map(data =><TableData key={data._id}
                data={data}></TableData>)
}
            </tr> <br />
            
            </table>
        </div>
    );
};

export default GetAddressData;