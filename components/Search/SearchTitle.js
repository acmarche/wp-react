function SearchTitle( propos ) {
    if ( 2 > propos.keyword.length ) {
        return null;
    }

    return (
        <>
            <span className="pt-24px d-block text-center ff-semibold text-dark-primary fs-short-2">{propos.count } RÉSULTATS POUR { propos.keyword }</span>
        </>
    );
}

export default SearchTitle;
