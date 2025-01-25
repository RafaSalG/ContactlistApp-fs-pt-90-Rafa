
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Rafa/contacts")
					if (!response.ok) {
						console.error("Fetch error getContacts")
					}
					const data = await response.json()
					setStore({ contacts: data.contacts })
				}
				catch (error) {
					console.error("Failed to get getContacts")
				}
			},

			createContact: async (newContact, navigate) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Rafa/contacts", {
						method: "POST",
						body: JSON.stringify(newContact),
						headers: { "Content-Type": "application/json" }
					})
					if (!response.ok) {
						console.error("Fetch error createContact")
					}
					const data = await response.json()
					const store = getStore()
					setStore({ contacts: [...store.contacts, data] });
					navigate("/")
				} catch (error) {
					console.error("Failed to create contact")
				}
			},

			editContact: async (id, contact, navigate) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Rafa/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify(contact),
						headers: { 'Content-Type': 'application/json' }
					})
					if (!response.ok) {
						console.error("Fetch error editContact")
					}
					navigate("/");
				} catch (error) {
					console.error("Failed to edit contact")
				}
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Rafa/contacts/${id}`, {
						method: "DELETE",

					})
					if (!response.ok) {
						console.error("Fetch error DeleteContact")
					}

					const store = getStore();
					setStore({
						contacts: store.contacts.filter(contact => contact.id !== parseInt(id))
					});

				}
				catch (error) {
					console.error("Failed to deleteContact")
				}
			},
		}
	};
};

export default getState;
