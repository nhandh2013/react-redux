import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleForm: false
        }
    }
    showForm() {
        this.setState({
            toggleForm: !this.state.toggleForm
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.refs.text.value);
        this.refs.text.value = '';
        this.showForm();
    }
    render() {
        if(this.state.toggleForm) return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="text" placeholder="add more item here"/>
                    <p><button>Add</button></p>
                    <hr/>
                </form>
            </div>
        )
        return <button onClick={this.showForm.bind(this)}>+</button>
    }
}

export default AddItem;