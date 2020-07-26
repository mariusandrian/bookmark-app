import React, { Component } from 'react'

export class BookmarkList extends Component {
    render() {
        return (
            <div className="bookmark-list">
                {this.props.bookmarks.map((bookmark, index) => {
                    return (
                        <div key={index} className="bookmark-item">
                            <a href={bookmark.url}>{bookmark.title}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookmarkList
