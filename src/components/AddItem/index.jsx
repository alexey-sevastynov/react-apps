import React from 'react';
import './addItem.css';

class AddItem extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState(({ label }) => {
            return {
                label: event.target.value
            }
        })
        console.log(this.state.label);
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState(({ label }) => {
            return {
                label: ''
            };
        });
    }

    render() {
        return (
            <form
                className='addItemForm'
                onSubmit={this.onSubmit}
            >

                <input
                    type="text"
                    className='form-control'
                    placeholder='what need to do?'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button
                    className='btn btn-outline-secondary'
                // onClick={() => this.props.addItem('Hello World!')}
                >Add Item</button>
            </form>
        )
    }

}


export default AddItem