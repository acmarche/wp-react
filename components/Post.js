import { fetchPosts } from '../service/posts-service';

const {
    useState,
    useEffect
} = wp.element;

function Post( propos ) {
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState( false );

    async function loadPosts() {
        setLoading( true );
        let response;
        try {
            response = await fetchPosts( propos.siteSlug, propos.catId );
            setPosts( response.data );
            setLoading( false );
        } catch ( e ) {
            setLoading( false );
        }
        return null;
    }

    useEffect( () => {
        if ( 0 < propos.catId ) {
            loadPosts();
        }
    }, [ propos.catId ]);

    return (
        <div className="pt-24px">
            <ul className="d-flex mx-n12px flex-wrap">
                {posts.map( ( object, index ) => (
                    <li key={index} className="pb-12px px-12px col-12 col-md-6">
                        <a
                            href={object.link}
                            className="border border-default p-24px shadow-sm d-block"
                        >
                            <h3
                                className="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis"
                                dangerouslySetInnerHTML={{
                                    __html: `${object.react_category_filter.join( ' | ' )} ${
                                        object.post_title
                                    }`
                                }}
                            />
                            <span
                                className="d-block pt-8px fs-short-3 ellipsis text-dark-primary"
                                dangerouslySetInnerHTML={{
                                    __html: 'excerpt here'
                                }}
                            />
                        </a>
                    </li>
                ) )}
            </ul>
        </div>
    );
}

export default Post;
