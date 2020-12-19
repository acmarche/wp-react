import Exemple from './Exemple';
import Category from './Category';

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
            <Exemple charle={'jenny'}/>
            <div className={'alert alert-info'}>
                <p>coucou {siteSlug}</p>
            </div>
            <button className={'btn btn-primary'} type={'button'} name={'bouton'}
                onClick={() => setSiteSlug( 'loulou' )}>Change
            </button>
        </>
    );
}

export default App;
