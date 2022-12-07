import React from 'react'

class ItemStatusFilter extends React.Component {


    render() {

        return (
            <div className='d-flex flex-row '>
                <button type='button'
                    className='btn btn-info'>All</button>
                <button type='button'
                    className='btn btn-outline-secondary'>Active</button>
                <button type='button'
                    className='btn btn-outline-secondary'>Done</button>
            </div>
        )
    }
}




export default ItemStatusFilter;