import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '');

    return (
        <form className='w-50'>
            <div className='wb-3'>
                <label className='form-label'>Task</label>
                <input type='text' className='form-control' value={task} onChange={(e) => setTask(e.target.value)}/>
            </div>
        </form>
    )
}

export default CustomHookExample2
