import CategoryChildren from './CategoryChildren';
import Post from './Post';
import CategoryTitle from './CategoryTitle';

const {
    useState,
    useEffect
} = wp.element;

function App() {
    const [ selectedCategory, setSelectedCategory ] = useState( 0 );
    const [ selectedCategoryTitle, setSelectedCategoryTitle ] = useState( '' );

    const mainCategory = document.getElementById( 'appjf' )
        .getAttribute( 'data-categoryid' );
    const siteSlug = document.getElementById( 'appjf' )
        .getAttribute( 'data-siteslug' );
    const color = document.getElementById( 'appjf' )
        .getAttribute( 'data-color' );
    const categoryTitle = document.getElementById( 'appjf' )
        .getAttribute( 'data-categoryTitle' );

    useEffect( () => {
        setSelectedCategory( mainCategory );
        setSelectedCategoryTitle( categoryTitle );
    }, []);

    return (
        <>
            <CategoryTitle title={selectedCategoryTitle} color={color}/>
            <CategoryChildren
                catId={mainCategory}
                siteSlug={siteSlug}
                setSelectedCategory={setSelectedCategory}
                selectedCategoryTitle={setSelectedCategoryTitle} />
            <Post catId={selectedCategory} siteSlug={siteSlug}/>
        </>
    );
}

export default App;
