import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactSlice'
import { Link } from 'react-router-dom'

function Item({item}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        if(window.confirm('Are you sure?')) {
        dispatch(deleteContact(item.id))
        }
    }

  return (
    <ul className='list'>
        <li>
            <span>{item.name}</span>
            <span>{item.phone_number}</span> 
            <div className='edit'>
              <Link className='edit-btn' to={`/edit/${item.id}`}>Edit</Link>
              <span className="delete-btn" onClick={() => handleDelete(item.id)}>X</span>
            </div>
        </li>
    </ul>
  )
}

export default Item