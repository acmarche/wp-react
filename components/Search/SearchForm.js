function SearchForm( propos ) {
    return (
        <>
            <div className="mw-550px position-relative m-auto w-100 mt-48px">
                <form name={'search'} method={'get'} action={'/?s='}>
                    <input type={'search'} name={'s'} placeholder={'Que cherchez-vous ?'} autoComplete={'off'} onChange={propos.runSearch} defaultValue={propos.keyword} className="border-0 rounded-pill h-42px pl-16px pr-58px fs-short-3 bg-lighter"/>
                    <button type={'submit'}
                        className="position-absolute top-0 bottom-0 right-0 w-42px d-flex justify-content-center align-items-center p-0 border-0 rounded-right-pill bg-transparent icon_custom">
                        <i className="i-search i-dark-primary"/>
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchForm;
