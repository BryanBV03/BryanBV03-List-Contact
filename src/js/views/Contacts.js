import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <h1>Contactos</h1>
            {store.contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}

        </div>
    );
};