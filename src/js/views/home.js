import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { CardContact } from "../component/CardContact";
import { Context } from "../store/appContext";
import { useEffect } from 'react';

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		const createAgenda = async () => {
			try {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Rafa", {
					method: "POST",
					headers: { "Content-Type": "application/json" }
				});

				if (!response.ok) {
					console.error("Fetch error to CreateAgenda")
				}
				const data = await response.json()
				console.log("Agenda created successfully", data)
			}
			catch (error) {
				console.error("Failed to create Agenda")
			}
		};
		createAgenda();
	}, [])

	useEffect(() => { actions.getContacts();
	}, [])

	return (
		<div className="text-center mt-5 container-fluid">
			<div className="d-flex justify-content-end mb-2">
				<Link to={"/AddContact"}>
					<button className="btn btn-success">Add a new contact</button>
				</Link>
			</div>
			{store.contacts.map((contact, index) => {
				return (
					<div key={index}>
						<CardContact
							name={contact.name}
							phone={contact.phone}
							email={contact.email}
							address={contact.address}
							id={contact.id} />
					</div>
				)
			})}
		</div>
	)
};
