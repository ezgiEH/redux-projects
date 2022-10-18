import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice'
import Masonry from 'react-masonry-css'
import './style.css'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { Link } from 'react-router-dom'

function Home() {
  const characters = useSelector((state) => state.characters.items)
  const nextPage = useSelector((state) => state.characters.page)
  const hasNextPage = useSelector((state) => state.characters.hasNextPage)
  const status = useSelector((state) => state.characters.status)
  const error = useSelector((state) => state.characters.error)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters())
    }
  }, [dispatch])


  if (status === 'failed') {
    return <Error message={error} />
  }
  return (
    <div className='App'>
      <h1>Breaking Bad App</h1>
      <h3>Characters</h3>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          characters.map((character) => (
            <div key={character.char_id}>
              <Link to={`/char/${character.char_id}`}>
                <img src={character.img} alt={character.name} className="character" />
                <h3>{character.name}</h3>
              </Link>
            </div>
          ))
        }
      </Masonry>
      {status === "loading" && <Loading />}
      {hasNextPage && status && <button className='btn' onClick={() => dispatch(fetchCharacters(nextPage))}>Load More</button>}
      {!hasNextPage && status && <h3>There is nothing to be shown.</h3>}
    </div>
  )
}

export default Home