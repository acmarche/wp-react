import { fetchCategories } from '../service/categories-service';

const { useState, useEffect } = wp.element;

function Category( propos ) {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState( false );

    async function loadCategories() {
        setLoading( true );
        let response;
        try {
            response = await fetchCategories( propos.siteSlug, propos.catId );
            setCategories( response.data );
            setLoading( false );
        } catch ( e ) {
            setLoading( false );
        }
        return null;
    }

    useEffect( () => {
        if ( 0 < propos.catId ) {
            loadCategories();
        }
    }, [ propos.catId ]);

    function handleClick( categoryId, categoryTitle ) {
        propos.setSelectedCategory( categoryId );
        propos.selectedCategoryTitle( categoryTitle );
    }

    return (
        <div className="overflow-hidden w-100 pt-48px col-6 px-0">
            <ul className="object-tags">
                {categories.map( ( object, index ) => (
                    <li
                        key={index}
                        className={`${object.active ? 'active' : ''} pr-24px`}
                    >
                        <a
                            data-category-id={object.id}
                            onClick={( ( event ) => handleClick( object.id, object.name ) )}
                            href="#"
                        >
                            {object.name} | {object.id}
                        </a>
                    </li>
                ) )}
            </ul>
        </div>
    );
}

export default Category;
