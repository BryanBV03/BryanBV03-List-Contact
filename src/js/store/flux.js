const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            agenda: "my_agenda", // Asegúrate de que este slug sea correcto y exista en la API
            demo: []  // Inicializa demo como un array vacío
        },
        actions: {
            getContacts: async () => {

                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Developers/contacts`);
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }
                    const data = await resp.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error al cargar los contactos", error);
                }
            },
            addContact: async (contact) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Developers/contacts`, {
                        method: "POST",
                        body: JSON.stringify(contact),
                        headers: { "Content-Type": "application/json" }
                    });
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error al añadir el contacto", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Developers/contacts/${id}`, {
                        method: "PUT",
                        body: JSON.stringify(updatedContact),
                        headers: { "Content-Type": "application/json" }
                    });
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error al editar el contacto", error);
                }
            },
            deleteContact: async (id) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Developers/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error al eliminar el contacto", error);
                }
            },
            loadDemoData: async () => {
                // Implementa la lógica para cargar datos demo aquí si es necesario
                // Ejemplo:
                // const resp = await fetch('/api/demo');
                // const data = await resp.json();
                // setStore({ demo: data });
            },
            changeColor: (index, color) => {
                const store = getStore();
                const updatedDemo = [...store.demo];
                if (updatedDemo[index]) {
                    updatedDemo[index].background = color;
                    setStore({ demo: updatedDemo });
                }
            }
        }
    };
};

export default getState;
