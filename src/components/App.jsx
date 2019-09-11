import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import Header from './Header';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostList = this.handleAddingNewPostList.bind(this);
    }
    handleAddingNewPostList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList });

    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/PostList' render={() => <PostList postList={this.state.masterPostList} />} />

                    <Route exact path='/NewPostForm' render={() => <NewPostForm onNewPostCreation={this.handleAddingNewPostList} />} />
                </Switch>
            </div >
        )
    }

}


export default App;