import React from "react";
import "./styles.css";
import Card from "./Cards";
import Contacts from "./Contacts";

export default function MyContacts() {
  const mapContacts = Contacts.map((contact, index) => {
    return (
      <Card
        name={contact.name}
        imgUrl={contact.imgUrl}
        phone={contact.phone}
        email={contact.email}
        key={index}
        count={index + 1}
      />
    );
  });
  return (
    <div className="wrapper">
      <h1>My Contacts</h1>

      {mapContacts}
    </div>
  );
}
