import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const SearchResults = props => {
    return props.queryData.map(each => {
        return (
            <div key={each.id} className="search-result">
                <h2 className="title">{each.title}</h2>
                <hr />
                <p className="date">{each.created_at}</p>
                <p className="type">Type: {each.type}</p>
                <div className="description">Job description: {ReactHtmlParser(each.description)}</div>
            </div>
        )
    })
}

export default SearchResults;