import React from 'react'
import { useState } from 'react'

function Main() {

    const [show, setShow] = useState(false)

    const showMessage = () => {
        setShow(true);
    }
    const hideMessage = () => {
        setShow(false);
    }

    return (
        <div className='p-5 m-5'>
            <button onClick={showMessage} className='btn btn-info'>Show Message</button>
            <button onClick={hideMessage} className='btn btn-danger ms-2'>Hide Message</button>
            {show && <h3 className='text-light mt-5'>Hello React !</h3>}
        </div>
    )
}

export default Main