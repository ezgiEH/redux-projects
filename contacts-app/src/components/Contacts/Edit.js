import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { contactSelectors, updateContact } from '../../redux/contactSlice';


function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const contact = useSelector(contactSelectors.selectEntities)[id];
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.phone_number);
    const [succes , setSucces] = useState(false);

    if (!contact) return <Navigate replace to="/" />

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !number) return false
        dispatch(updateContact({ id, changes: { name, phone_number: number } }))
        setName('');
        setNumber('');
        setSucces(true);
    }

    return (
        <div>
            <h2>Edit</h2>
            <div className='edit-contact'>
                <span>{contact.name}</span>
                <span>{contact.phone_number}</span>
            </div>
            <form>
                <input placeholder={contact.name} value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder={contact.phone_number} value={number} onChange={(e) => setNumber(e.target.value)} />
            </form>
            <span className='btn'>
                
                {succes ? <span className='succes'>Successful !</span> : <button onClick={handleSubmit}>Update</button>}
                <button><Link to='/'>Back</Link></button>
            </span>
        </div>
    )
}

export default Edit