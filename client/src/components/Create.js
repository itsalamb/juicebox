import React, { useState } from "react";

const Create = ({posts, setPosts}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
   

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem('token');
        console.log('thisisyourtoken', token)
        const response = await fetch('/api/posts' ,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                    title,
                    content,
                    tags
            })
        });
        const data = await response.json();
        console.log('data: ', data);
        history.push('/Home')
    }


    return <>
        <h3>
            Create a Post
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="content" value={content} onChange={(ev) => setContent(ev.target.value)}></input>
            <input type="text" placeholder="tags" value={tags} onChange={(ev) => setTags(ev.target.value)}></input>
            <button type="submit" className="btn">Submit</button>
        </form>
    </>
}

export default Create