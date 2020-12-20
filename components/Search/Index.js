import SearchTitle from './SearchTitle';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import { searchElastic } from './service/search-service';

const {
    useState,
    useEffect
} = wp.element;

function Search( ) {
    const [ keyword, setKeyword ] = useState( '' );
    const [ count, setCount ] = useState( 0 );
    const [ results, setResults ] = useState([]);

    async function executeSearch() {
        let response;
        try {
            response = await searchElastic( keyword );
            const { data } = response;
            setResults( data.hits );
            setCount( data.count );
        } catch ( e ) {
            console.log( e );
        }
        return null;
    }

    useEffect( () => {
        if ( 2 < keyword.length ) {
            console.log( `execute search ${keyword}` );
            executeSearch( keyword );
        }
    }, [ keyword ]);

    return (
        <>
            <SearchForm keyword={keyword} setKeyword={setKeyword}/>
            <SearchTitle count={count} keyword={keyword}/>
            <SearchResult results={results}/>
        </>
    );
}

export default Search;
