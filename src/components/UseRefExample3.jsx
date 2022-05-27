import Todo from './Todo'
import React, {useState} from 'react';

function UserRefExample3() {
    const [showTodo, setShowTodo] = useState(true);

    return (
        <div>
            {showTodo && <Todo />}
            <button className='btn btn-primary' onClick={ () => setShowTodo(!showTodo)}>toggle todo </button>
        </div>
    )
}

export default UserRefExample3
