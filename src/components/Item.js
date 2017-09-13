import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(...props);
        this.state = props;
    }
    removeItem(index) {
        this.state.fruit.splice(index, 1);
        this.setState(this.state);
    }
    render() {
        let fruit = this.props.fruit.map((e, i) => (
           <div key={i}>
               <h3>{e}</h3>
               <button onClick={this.removeItem.bind(this, i)}>Delete</button>
           </div>
        ));
        return (
            <div>
                {fruit}
            </div>
        )
    }
}

export default Item;