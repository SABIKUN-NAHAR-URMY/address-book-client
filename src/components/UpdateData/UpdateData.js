import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateData = () => {
    const [updated, setUpdated] = useState([]);
    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/address/${id}`)
            .then(res => res.json())
            .then(data => setUpdated(data))
    }, [id]);

    const handelUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const formUpdate = {
            name,
            email,
            phone
        }

        fetch(`http://localhost:5000/address/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formUpdate)
        })
            .then(data => {
                console.log(data);
                toast.success("Data Updated!");
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='formDesign'>
                <h1>Address Book</h1>
                <form onSubmit={handelUpdate}>
                    <label className='item'>Name:<input type="text" name="name" placeholder='name' defaultValue={updated.name} required /></label> <br />
                    <label className='item'>Email:<input type="email" name="email" placeholder='email' defaultValue={updated.email} required /></label> <br />
                    <label className='item'>Contact Number:<input type="text" name="phone" placeholder='phone' defaultValue={updated.phone} required /></label> <br />
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default UpdateData;