import React from 'react';
import PropTypes from 'prop-types';
const Post = (props) => {

    function handleUpVote() {
        this.ListeningStateChangedEvent({ upvotes: this.state.upvotes + 1 });
    }

    function handleDownVote() {
        this.ListeningStateChangedEvent({ upvotes: this.state.downvotes + 1 });
    }


    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.location}</h1>
            <h1>{props.reason}</h1>
            <button onClick={this.handleUpVote}>upvote button {this.state.upvotes}</button>

            <button onClick={this.handleDownVote}>upvote button {this.state.downvotes}</button>
        </div>
    )
}

Post.propTypes = {
    name: PropTypes.name,
    location: PropTypes.location,
    reason: PropTypes.reason
}


export default Post;
