import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import TableData from '../GetAddressData/TableData';
import './AddressBook.css';

const AddressBook = () => {
    const [addData, setAddData] = useState(false);
    const [getData, setGetData] = useState([]);

    const handelAdd = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(name, email, phone);
        const add = {
            name: name,
            email: email,
            phone: phone,
        }

        fetch('http://localhost:5000/address', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization : `bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(add)
        })
        .then(res => res.json())
        .then(result => {
                console.log(result);
                if(result.acknowledged){
                    toast.success('Data added successfully in Database');
                    form.reset();
                    setAddData(true);
                };
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/address`)
            .then(res => res.json())
            .then(data => {
                setGetData(data);
            })
    }, [addData]);
    return (
        <div>
            <div className='formDesign'>
                <h1>Address Book</h1>
                <form onSubmit={handelAdd}>
                    <label className='item'>Name:<input type="text" name="name" placeholder='name' required /></label> <br />
                    <label className='item'>Email:<input type="email" name="email" placeholder='email' required /></label> <br />
                    <label className='item'>Contact Number:<input type="text" name="phone" placeholder='phone' required /></label> <br />
                    <input type="submit" value="Add" />
                </form>
            </div>

            <div className='tableData'>
            <table>
           <tr>
            {
                getData.map(data =><TableData 
                key={data._id}
                data={data}></TableData>)
}
            </tr> <br />
            
            </table>
        </div>
        </div>
    );
};

export default AddressBook;