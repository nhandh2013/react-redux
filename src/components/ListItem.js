import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem';

class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            fruit: ["Banana", "Orange", "Apple", "Mango"]
        }
    }
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
                    this.state.fruit.map((e,i) => (
                        <Item handleRemove={this.removeItem.bind(this)} key={i} name={e} index={i}/>
                    ))
                }
            </div>
        )
    }
}

export default ListItem;
