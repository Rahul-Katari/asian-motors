import React from 'react';
import BlogCard from './BlogCard';  // Import the BlogCard component

const blogPosts = [
    {
        image: 'images/resource/blog-1.jpg',
        date: 'April 20, 2023',
        author: 'Ali Tufan',
        title: 'This Long-Awaited Technology May Finally Change the World',
        link: 'blog-single.html'
    },
    {
        image: 'images/resource/blog-2.jpg',
        date: 'March 15, 2023',
        author: 'John Doe',
        title: 'The Future of AI: What You Need to Know',
        link: 'blog-single.html'
    },
    {
        image: 'images/resource/blog-3.jpg',
        date: 'February 10, 2023',
        author: 'Jane Smith',
        title: 'Why Sustainable Cars Are the Future',
        link: 'blog-single.html'
    }
];


const BlogsSection = ({ blogsPage }) => {
    return (
        <section className={`blog-section ${blogsPage && 'pt-0'}`}>
            <div className="boxcar-container">
                {!blogsPage && <div className="boxcar-title wow fadeInUp">
                    <h2>Latest Blog Posts</h2>
                </div>}

                <div className="row">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index}
                            image={post.image}
                            date={post.date}
                            author={post.author}
                            title={post.title}
                            link={post.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogsSection;
