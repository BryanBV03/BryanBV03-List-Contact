import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { FaTrashAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPen } from "react-icons/fa6";

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    

    const handleDelete = () => {
        actions.deleteContact(contact.id);
        setShowDeleteModal(false);
    };

    const handleEdit = () => {
        actions.editContact(contact.id);
        setShowEditModal(false);
    };

    return (
        <>
            <div className="card mb-3">
                <div className="card-body bg-secondary d-flex align-items-center">
                    <img
                        src="https://fineartsconference.com/wp-content/uploads/2023/02/image-placeholder-icon-11.png"
                        className="rounded-circle"
                        alt="..."
                    />
                    <div className="p-3 ms-5">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text"><MdEmail /> {contact.email}</p>
                        <p className="card-text"><FaPhone /> {contact.phone}</p>
                        <p className="card-text"><FaLocationDot /> {contact.address}</p>
                    </div>
                    <div className="ms-auto d-flex align-items-center">
                        <FaPen
                            onClick={() => setShowEditModal(true)}
                            style={{ cursor: "pointer", marginRight: "10px" }}
                        />
                        <FaTrashAlt
                            onClick={() => setShowDeleteModal(true)}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div>

            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowDeleteModal(false)}>&times;</span>
                        <h2>Confirmar Eliminación</h2>
                        <p>¿Está seguro de borrar el contacto?</p>
                        <button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                        <button onClick={handleDelete}>Continuar</button>
                    </div>
                </div>
            )}

            {showEditModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowEditModal(false)}>&times;</span>
                        <h2>Confirmar Modificación</h2>
                        <p>¿Desea modificar su contacto?</p>
                        <button onClick={() => setShowEditModal(false)}>Cancelar</button>
                        <button  onClick={handleEdit}>Continuar</button>
                    </div>
                </div>
            )}
        </>
    );
};
