import React from 'react'
import { contactSelectors, deleteAllContacts } from '../../redux/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item'

function List() {
    const contacts = useSelector(contactSelectors.selectAll)
    const total = useSelector(contactSelectors.selectTotal)
    const dispatch = useDispatch();
    const handleDeleteAll = ()=> {
        if(window.confirm('Are you sure?')) {
            dispatch(deleteAllContacts())
        }
    }

    return (
        <div>
            {contacts.map(contact => (<Item key={contact.id} item={contact} />))}
            <div className='list-footer'>
                <span>Total: {total}</span>
                {total > 0 && <span className="btn" onClick={handleDeleteAll}>Delete All</span>}
            </div>
        </div>
    )
}

export default List