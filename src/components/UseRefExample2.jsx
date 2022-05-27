import React, {useState, useEffect, useRef} from 'react';

function UserRefExample1() {
    const [name, setName] = useState('');

    const renders = useRef(1);
    const prevName = useRef('');

    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name
    }, [name]);

    return (
        <div>
            <h1>Renders: {renders.current} </h1>
            <h1>Prev Name state: {prevName.current} </h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3'/>
        </div>
    )
}

export default UserRefExample1
