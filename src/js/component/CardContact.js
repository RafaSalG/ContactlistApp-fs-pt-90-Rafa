import React, { useActionState } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from 'react';

export const CardContact = ({ name, phone, email, address, id, contact }) => {

    const { store, actions } = useContext(Context)

    const removeContact = () => {
        actions.deleteContact(id);
    };

    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0 d-flex justify-content-center">
                    <div className="col-md-3 align-content-center">
                        <img src="https://picsum.photos/200/200/" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-md-3">
                        <div className="card-body">
                            <h5 className="card-title"> {name}</h5>
                            <p className="card-text"><i className="fa-solid fa-phone"></i> {phone}</p>
                            <p className="card-text"><i className="fa-solid fa-envelope"></i> {email}</p>
                            <p className="card-text"><i className="fa-solid fa-location-dot"></i> {address}</p>
                            <Link to={"/EditContact/" + id}>
                                <button type="button" className="btn btn-secondary">
                                    <i className="fa-solid fa-pen-to-square"></i></button>
                            </Link>
                            <button type="button" className="btn btn-secondary"
                                data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact + id}>
                                <i className="fa-regular fa-trash-can"></i></button>


                            {/* DELETE MODAL */}
                            <div className="modal fade" id={"delete-contact-" + contact + id} >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="delete-contact-">Are you sure?</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            If you delete this we will have our project rejected
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={removeContact}>Do it!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
