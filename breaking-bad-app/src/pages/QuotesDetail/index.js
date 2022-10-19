import { useParams , Link, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function QuotesDetail() {
    const { quote_id } = useParams()

    const quote = useSelector((state) => 
    state.quotes.items.find((quote) => quote.quote_id === Number(quote_id)),
    )

    if (!quote) {
        return <Navigate to="/quotes" />
    }

  return (
    <div className='App'>
        <h1>QUOTE: </h1>
        <br />
        <h3>{quote.quote}</h3>
        <p>AUTHOR: {quote.author}</p>
        <Link to='/'><button>Back</button></Link>
    </div>
  )
}

export default QuotesDetail