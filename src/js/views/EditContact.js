import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditContact = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const { store, actions } = useContext(Context)
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    })
    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        const contactToEdit = store.contacts.find(contact => contact.id == parseInt(id))
        setContact(contactToEdit)
    }, [])

    return (
        <div className="container">
            <h1 className="d-flex justify-content-center"> Edit contact </h1>
            <div className="mt-5">
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full name" name="name" onChange={handleChange} value={contact.name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter phone" name="phone" onChange={handleChange} value={contact.phone} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Email" name="email" onChange={handleChange} value={contact.email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Address" name="address" onChange={handleChange} value={contact.address} />
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={() => actions.editContact(id, contact, navigate)}>Save</button>
                <Link to="/"><p className="link-opacity-100 d-flex justify-content-start" href="#">get back to contacts</p></Link>
            </div>
        </div>
    );
}

export default EditContact;