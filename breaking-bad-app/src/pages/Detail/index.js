import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Detail() {
    const { char_id } = useParams()
    const [loading, setLoading] = useState(true)
    const [char, setChar] = useState({})
    
    useEffect(() => {
       axios (`https://www.breakingbadapi.com/api/characters/${char_id}`)
         .then(res => setChar(res.data[0]))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [char_id])

    return (
    <div className='App'>
        {loading && <h3>Loading...</h3>}
        <h1>NAME:{char.name}</h1>
        <img style={{width: '30%'}} src={char.img} alt={char.name} />
        <p>NICKNAME: {char.nickname}</p>
        <p>BIRTHDAY: {char.birthday}</p>
        <p>STATUS:{char.status}</p>
        <p>OCCUPATION: {char.occupation}</p>
        <p>PORTRAYED: {char.portrayed}</p>
        <Link to='/'>Back</Link>
    </div>
  )
}

export default Detail