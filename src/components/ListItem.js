import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem';
let fruit = ["Banana", "Orange", "Apple", "Mango"];
class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            fruit: fruit
        }
    }
    addItem(item) {
        this.state.fruit.push(item);
        this.setState(this.state);
    }
    render() {
        return (
            <div>
                <AddItem handleAdd={this.addItem.bind(this)}/>
                <Item fruit={fruit}/>
            </div>
        )
    }
}

export default ListItem;