import SearchTitle from './SearchTitle';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';

const {
    useState,
    useEffect
} = wp.element;

function Search( propos ) {
    const [ keyword, setKeyword ] = useState( '' );

    function runSearch() {
        console.log( 'run search' );
    }

    return (
        <>
            <SearchForm keyword={keyword} runSearch={runSearch()}/>
            <SearchTitle count={0} keyword={'zeze'}/>
            <SearchResult/>
        </>
    );
}
