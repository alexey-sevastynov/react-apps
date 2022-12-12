import React from 'react';
import './addItem.css';

class AddItem extends React.Component {

    render() {
        return (
            <div className='addItem'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => this.props.addItem('Hello World!')}
                >Add Item</button>
            </div>
        )
    }

}


export default AddItem