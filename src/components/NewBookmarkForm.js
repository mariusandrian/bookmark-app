import React, { Component } from 'react'

export class NewBookmarkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            title: this.state.title,
            url: this.state.url
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        }
        this.setState({}, async () => {
            try {
                await fetch(this.props.backendURL, requestOptions);
                this.setState({
                    title: '',
                    url: ''
                })
                this.props.addToList(newItem);
            } catch(err) {
                console.log(err);
            }
        })
    }

    render() {
        return (
            <div className="new-form">
                <h2>Add a new bookmark</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        placeholder="website name" 
                        value={this.state.title}
                        onChange={this.handleChange} 
                        id='title' 
                    />
                    <input 
                        type='text' 
                        placeholder="website url" 
                        value={this.state.url}
                        onChange={this.handleChange} 
                        id='url' 
                    />
                    <input type='submit' value="Add!"/>
                </form>
            </div>
        )
    }
}

export default NewBookmarkForm
