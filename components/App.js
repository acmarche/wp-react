import Category from './Category';
import Post from './Post';

const {
    useState,
    useEffect
} = wp.element;

function App() {
    const [ selectedCategory, setSelectedCategory ] = useState( 0 );
    const mainCategory = document.getElementById( 'appjf' )
        .getAttribute( 'data-categoryid' );
    const siteSlug = document.getElementById( 'appjf' )
        .getAttribute( 'data-siteslug' );

    useEffect( () => {
        setSelectedCategory( mainCategory );
    }, []);

    return (
        <>
            <Category catId={mainCategory} siteSlug={siteSlug}
                setSelectedCategory={setSelectedCategory}/>
            <Post catId={selectedCategory} siteSlug={siteSlug}/>
        </>
    );
}

export default App;
