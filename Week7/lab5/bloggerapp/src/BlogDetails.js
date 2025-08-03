import React from "react";

const BlogDetails = ({ blogs }) => {
    return (
        <div>
            <h2>📝 Blog Posts</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <b>{blog.title}</b>: {blog.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogDetails;
