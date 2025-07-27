// src/Post.js
import React from 'react';

class Post extends React.Component {
    render() {
        const { title, body } = this.props;
        return (
            <div style={{ marginBottom: '20px' }}>
                <h2>{title}</h2>
                <p>{body}</p>
                <hr />
            </div>
        );
    }
}

export default Post;
