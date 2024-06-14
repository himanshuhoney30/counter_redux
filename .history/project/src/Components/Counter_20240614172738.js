import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, showdata } from '../Features/ShowSlice'

function Counter() {
    const data = useSelector((a) => a.show.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="" style={{ width: "50rem", height: "10rem" }}>
                <div class="">
                    <h1 class="">Counter:-{data}</h1>
                    <div className='d-flex gap-2 justify-content-center'>
                        <button type='submit' className='btn btn-primary' onClick={()=>dispatch(increment())}>Increment</button>
                        <button type='submit' className='btn btn-danger' onClick={()=>dispatch(showdata())}>Reset</button>
                        <button type='submit' className='btn btn-primary' onClick={()=>dispatch(decrement())}>Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter