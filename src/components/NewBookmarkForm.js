import React, { Component } from 'react'

export class NewBookmarkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: ''
        }
    }
    // handleTextChange = (event) => {
    //     this.props.handleChange(event);
    // }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })
    }
    render() {
        return (
            <div className="new-form">
                <h2>Add a new bookmark</h2>
                <form>
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
