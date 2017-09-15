import React, { Component } from 'react';
import {connect} from 'react-redux';

class Item extends Component {
    removeItem() {
        //this.props.handleRemove(this.props.index);
        let {index, dispatch} = this.props;
        dispatch({type: 'REMOVE_ITEM', index: index})
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

export default connect()(Item);
