import SearchTitle from './SearchTitle';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';

const {
    useState,
    useEffect
} = wp.element;

function Search() {
    return (
        <>
            <SearchForm keyword={'zeze'}/>
            <SearchTitle count={0} keyword={'zeze'}/>
            <SearchResult/>
        </>
    );
}

export default Search;
