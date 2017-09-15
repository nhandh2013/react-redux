import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem';
import {connect} from 'react-redux';
class ListItem extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         fruit: ["Banana", "Orange", "Apple", "Mango"]
    //     }
    // }
    addItem(item) {
        this.props.fruit.push(item);
        this.setState(this.props);
    }
    removeItem(index) {
        this.props.fruit.splice(index, 1);
        this.setState(this.props);
    }
    render() {
        return (
            <div>
                <AddItem handleAdd={this.addItem.bind(this)}/>
                {
                    this.props.fruit.map((e,i) => (
                        <Item handleRemove={this.removeItem.bind(this)} key={i} name={e} index={i}/>
                    ))
                }
            </div>
        )
    }
}

export default connect(function(state) {
    return { fruit: state.fruit}
})(ListItem);

// export default connect(function(state) {
//     return {fruit: state.fruit}
// })(ListItem);
