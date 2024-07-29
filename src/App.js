import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost'; // Import the AddPost component

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'A short psychic broke out of jail. She was small medium at large.'
    },
    {
      postNumber: 1,
      text: 'I told my wife she was drawing her eyebrows too high. She looked surprised.'
    },
    {
      postNumber: 2,
      text: 'Why don’t scientists trust atoms? Because they make up everything.'
    },
  ]);

  const [postId, setPostId] = useState(3);

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter(post => post.postNumber !== id);
    setPostList(updatedPostList);
  }

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText
    };
    setPostList(postList => [...postList, newPost]);
    setPostId(postId + 1);
  }

  const posts = postList.map((post) => (
    <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost}/>
  ));

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost} /> {/* Add the AddPost component */}
    </div>
  )
}

export default App;
