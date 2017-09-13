import React, {Component} from 'react';

class AddItem extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.refs.text.value);
        this.refs.text.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="text" placeholder="add more item here"/>
                    <p><button>Add</button></p>
                    <hr/>
                </form>
            </div>
        )
    }
}

export default AddItem;