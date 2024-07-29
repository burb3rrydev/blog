import React, { useState } from 'react'; // Import useState
import './Post.css';

const AddPost = (props) => {
    const [text, setText] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
    };

    const handleAddClick = () => {
        if (text.trim()) {
            props.onAdd(text);
            setText(''); // Clear the text field after adding the post
        }
    };

    return (
        <div className='post-container'>
            <textarea onChange={updateText} type='text' value={text} />
            <br />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddPost;
