import Category from './Category';
import Post from './Post';

const { useState, useEffect } = wp.element;

function App() {
    const [ siteSlug, setSiteSlug ] = useState( '' );
    const [ mainCategory, setMainCategory ] = useState( 0 );

    function loadConfig() {
        setMainCategory( document.getElementById( 'appjf' ).getAttribute( 'data-catid' ) );
        setSiteSlug( document.getElementById( 'appjf' ).getAttribute( 'data-siteslug' ) );
    }

    useEffect( () => {
        loadConfig();
    });

    return (
        <>
            <Category catId={mainCategory} siteSlug={siteSlug}/>
            <Post catId={mainCategory} siteSlug={siteSlug}/>
        </>
    );
}

export default App;
