import React from 'react';
import SearchResultsContainer from '@components/SearchResults/SearchResultsContainer'

const SearchResults = props => {

        return (
            <Header>
                <h1>Search results</h1>
            </Header>
            <SearchResultsContainer queryData={props} />
        )
};



export default SearchResults;

