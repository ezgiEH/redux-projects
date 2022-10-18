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
        <Link to='/'>Back</Link>
        <h1>{char.name}</h1>
        <img style={{width: '50%'}} src={char.img} alt={char.name} />
        <p>{char.nickname}</p>
        <p>{char.birthday}</p>
        <p>{char.status}</p>
        <p>{char.occupation}</p>
        <p>{char.portrayed}</p>
    </div>
  )
}

export default Detail