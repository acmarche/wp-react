function CategoryTitle( propos ) {
    return (
        <div>
            <span className={`${propos.color} ff-semibold pt-12px d-block fs-short-2 `}>{propos.title}</span>
        </div>
    );
}

export default CategoryTitle;
