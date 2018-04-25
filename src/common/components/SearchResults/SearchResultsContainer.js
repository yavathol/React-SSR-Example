>import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { Container, Header } from '@components';

const SearchResultsContainer = ({queryData}) => {
    return queryData.map(each => {
        return (
            <div key={each.id} className="parent-container">
                <Container>
                    <div className="search-result">
                        <Header>
                            <h2 className="title">{each.title}</h2>
                        </Header>
                        <hr />
                        <p className="date">{each.created_at}</p>
                        <p className="type">Type: {each.type}</p>
                        <div className="description">Job description: {ReactHtmlParser(each.description)}</div>
                    </div>
                </Container>
            </div>
        )
    })
};



export default SearchResultsContainer;