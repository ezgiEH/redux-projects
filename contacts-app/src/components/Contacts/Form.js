import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactSlice'
import { nanoid } from '@reduxjs/toolkit';


function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');  

    const handleSubmit= (e) => {
        e.preventDefault();
        if(!name || !number) return false

        // ADD ONE CONTACT
        dispatch(addContact(({id: nanoid(), name, phone_number: number})))

        // ADD MANY CONTACTS
        // const names = name.split(',')
        // const data = names.map(name => ({id: nanoid(), name}))
        // dispatch(addContacts(data))
        setName('');
        setNumber('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder='Phone' value={number} onChange={(e) => setNumber(e.target.value)} />
        </form>
        <span className="btn">
          <button onClick={handleSubmit}>Add</button>
        </span>
    </div>
  )
}

export default Form