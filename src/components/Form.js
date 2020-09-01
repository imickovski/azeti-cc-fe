import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Form extends Component {
    state = {
        name: '',
        email: ''
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
        // alert(event.target.name)
        console.log(this.state.name)
        console.log(this.state.email)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>
                    Name:
        <input
                        id='name'
                        name='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label htmlFor='email'>
                    Email:
        <input
                        id='email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <Button type='submit' variant="contained" color="primary">
                    Save
         </Button>
            </form>
        )
    }
}