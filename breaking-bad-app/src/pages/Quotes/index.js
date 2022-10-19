import { useEffect } from 'react'
import {
    fetchQuotes,
    quotesSelector,
    quotesStatusSelector,
    quotesErrorSelector
} from "../../redux/quotesSlice";
import { useDispatch, useSelector } from 'react-redux'
import Quote from './quote';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

function Quotes() {
    const dispatch = useDispatch()
    const quotes = useSelector(quotesSelector)
    const status = useSelector(quotesStatusSelector)
    const error = useSelector(quotesErrorSelector)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchQuotes())
        }
    }, [dispatch, status])

    if (status === 'failed') {
        return <Error message={error} />
    }

    return (
        <div className='App'>
            <h1>Quotes</h1>
            {status === "loading" && <Loading />}
            <Quote quotes={quotes}/>
        </div>
    )
}

export default Quotes