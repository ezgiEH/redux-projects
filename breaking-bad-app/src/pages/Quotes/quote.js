import React from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom';
import "./style.css"

function Quote({ quotes }) {
    return (
        <div>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                quotes && quotes.map(quote => (
                    <div key={quote.quote_id}>
                        <Link to={`/quotes/${quote.quote_id}`}>
                            <p>{quote.quote}</p>
                            <h4>{quote.author}</h4>
                        </Link>
                    </div>
                ))
                }
            </Masonry>
        </div>
    )
}

export default Quote