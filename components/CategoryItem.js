const { useState } = wp.element;

function CategoryItem( propos ) {
    const [ item, setItem ] = useState( propos.item );
    const [ active, setActive ] = useState( false );

    function handleClick( categoryId, categoryTitle ) {
        propos.removeClass( categoryId );
        propos.setSelectedCategory( categoryId );
        propos.selectedCategoryTitle( categoryTitle );
        //   setActive( true );
    }

    return (
        <li
            className={`${item.active ? 'active' : ''} pr-24px`}
        >
            <a
                data-category-id={item.id}
                onClick={( ( event ) => handleClick( item.id, item.name ) )}
                href="#"
            >
                {item.name} {item.id}
            </a>
        </li>
    );
}

export default CategoryItem;
