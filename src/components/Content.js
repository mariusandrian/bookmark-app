import React, { Component } from 'react';
import NewBookmarkForm from './NewBookmarkForm';
import BookmarkList from './BookmarkList';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002/bookmarks";

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        }
    }
    loadData = async () => {
        const response = await fetch(BACKEND_URL);
        const results = await response.json();
        this.setState({bookmarks: results});
    }
    
    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="content-container">
                <NewBookmarkForm 
                    title={this.state.title} 
                    url={this.state.url} 
                    // handleChange={this.handleChange} 
                />
                {/* <BookmarkList bookmarks={this.state.bookmarks}/> */}
            </div>
        )
    }
}

export default Content
