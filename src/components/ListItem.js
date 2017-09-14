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
        this.state.fruit.push(item);
        this.setState(this.state);
    }
    removeItem(index) {
        this.state.fruit.splice(index, 1);
        this.setState(this.state);
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

export default connect((state) => {return {fruit: state.fruit}})(ListItem);

// export default connect(function(state) {
//     return {fruit: state.fruit}
// })(ListItem);
