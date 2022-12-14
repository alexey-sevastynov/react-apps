import React from "react";


import './searchPanel.css';

class SearchPanel extends React.Component {

    render() {
        const { searchText, changeSearchText } = this.props;
        
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder='search'
                onChange={changeSearchText}
                value={searchText}

            />
        )
    }

}

export default SearchPanel;