import { fetchPosts } from './service/posts-service';
import PostItem from './PostItem';

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

    const listItems = posts.map( ( object, index ) => (
        <PostItem
            item={object}
            key={object.id}
        />
    ) );

    return (
        <div className="pt-24px">
            <ul className="d-flex mx-n12px flex-wrap">
                {listItems}
            </ul>
        </div>
    );
}

export default Post;
