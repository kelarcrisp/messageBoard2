import React from 'react';


const NewPostForm = (props) => {

    let _name = null;
    let _location = null;
    let _issue = null;

    function HandleNewPostFormSubmission(event) {
        event.preventDefault();
        props.onNewPostCreation({ name: _name.value, location: _location.value, issue: _issue.value, })
        _name.value = '';
        _location.value = '';
        _issue.value = '';


    }



    return (
        <form onSubmit={HandleNewPostFormSubmission}>
            <input type="text" id="name" placeholder="name"
                ref={(input) => { _name = input; }} />
            <input type="text" id="location" placeholder="location"
                ref={(input) => { _location = input; }} />
            <input type="text" id="name" placeholder="issue"
                ref={(input) => { _issue = input; }} />

            <button type='submit'>Submit</button>
        </form>
    )
}

export default NewPostForm;