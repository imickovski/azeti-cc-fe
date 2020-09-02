import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Form extends Component {
    state = {
        name: '',
        email: '',
        editForm: false
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name)
        console.log(this.state.email)
    }

    toggleEditForm = () => {
        this.setState({
            editForm: !this.state.editForm
        })
    }

    render() {
        return (
            <div>
            <Button id='editButton' type='submit' variant="contained" color="primary" onClick={this.toggleEditForm}>Show Edit Form</Button>
                {this.state.editForm && (
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='name'>
                            Name:
                            <input
                                id='name'
                                name='name'
                                type='text'
                                required
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor='email'>
                            Email:
                             <input
                                id='email'
                                name='email'
                                type='email'
                                required
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                        <Button className='btn' type='submit' variant="contained" color="primary">
                            Save
                         </Button>
                    </form>
                )}
            </div>
        )
    }
}