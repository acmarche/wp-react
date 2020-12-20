const {
    useState,
    useEffect
} = wp.element;

function Agenda() {
    const [ title, setTitle ] = useState( 'default title' );

    useEffect( () => {
        document.title = title;
    });

    return (
        <div>
        </div>
    );
}

export default Agenda;
