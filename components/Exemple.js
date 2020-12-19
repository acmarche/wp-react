const { useState } = wp.element;

function Example( propos ) {
    const [ count, setCount ] = useState( 0 );
    const [ zeze, setZeze ] = useState( propos.charle );

    return (
        <div>
            <p>Vous avez cliqué {count} fois {zeze}</p>
            <button className={'btn btn-primary'} onClick={() => setCount( count + 1 )}>
                Cliquez ici
            </button>
        </div>
    );
}

export default Example;
