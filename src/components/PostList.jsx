import React from 'react';
import Post from './Post';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: 0,
            downvotes: 0
        };


    }
    render() {
        return (
            <div>
                {this.props.postList.map((post) => <Post
                    name={post.name}
                    name={post.location}
                    name={post.reason} />)}

            </div>
        )


    }
}
export default PostList;