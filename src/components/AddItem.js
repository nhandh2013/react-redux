import React, {Component} from 'react';
import {connect} from 'react-redux';
class AddItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         toggleForm: false
    //     }
    // }
    showForm() {
        // this.setState({
        //     toggleForm: !this.props.toggleForm
        // })
        let {dispatch} = this.props;
        dispatch({type: 'TOGGLE'})
    }
    handleSubmit(e) {
        e.preventDefault();
        let {dispatch} = this.props;
        dispatch({
            type: 'ADD_ITEM',
            item: this.refs.text.value
        })
        dispatch({type: 'TOGGLE'})

        // this.props.handleAdd(this.refs.text.value);
        // this.refs.text.value = '';
        // this.showForm();
    }
    render() {
        if(this.props.toggleForm) return (
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

export default connect(function(state){
    return { toggleForm: state.toggleForm}
})(AddItem);

