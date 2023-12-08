// import React, { useState, useEffect } from 'react';
import { getContact } from 'redux/selectors';
import { useSelector } from 'react-redux';

import GlobalStyle from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Phonebook } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContact);
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   console.log(savedContacts);
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return [];
  // });

  // const [filter, setFilter] = useState('');

  // Запись contacts в localeStorage , заменяет componentDidUpdate
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   if (contacts.find(contact => contact.name === newContact.name)) {
  //     return alert(`${newContact.name} is already in contacts`);
  //   }
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const getContact = e => {
  //   const searchQuerry = e.currentTarget.value;
  //   setFilter(searchQuerry);
  // };

  // const handleDeleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const getVisibleContact = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const visibleContact = getVisibleContact();

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <p>Add contact!</p>}
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </Phonebook>
  );
};
