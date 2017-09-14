import React, { Component } from 'react';

class Item extends Component {
    removeItem(e) {
        this.props.handleRemove(this.props.index);
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <button onClick={this.removeItem.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default Item;
