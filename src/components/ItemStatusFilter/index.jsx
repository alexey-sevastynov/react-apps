import React from 'react'

import './itemStatusFilter.css';

class ItemStatusFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];


    render() {

        const { statusFilter, onFilterChange } = this.props;

        const activeBtn = 'btn-info';
        const outlineBtn = 'btn-outline-secondary';

        const btns = this.buttons.map((item) => {
            const isActive = (statusFilter === item.name);
            const clazz = isActive ? activeBtn : outlineBtn;
            return (
                <button
                    key={item.name}
                    type='button'
                    className={`btn ${clazz}`}
                    onClick={() => onFilterChange(item.name)}
                >{item.label}
                </button>

            )
        });

        return (
            <div className='d-flex flex-row '>
                {btns}
            </div>
        )
    }
}




export default ItemStatusFilter;