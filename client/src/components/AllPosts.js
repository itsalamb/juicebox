import React, { useEffect, useState } from 'react';



const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('/api/posts', {
                method: 'GET',
                headers: {
                    'Content-type': 'Application/json',
                },
            })
            const data = await resp.json();
            console.log('this is the posts', data);
            setPosts(data.posts);
        }
        fetchPosts();
    }, [])


    return (
        <>
            <h1 className="Posts">Posts</h1>
            {posts.length ? posts.map(post => <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {
                     post.tags.map(tag => <span key={tag.id}>
                        {tag.name}
                    </span>)
                }
            </div>)
                : null}
        </>
    );
}

export default AllPosts