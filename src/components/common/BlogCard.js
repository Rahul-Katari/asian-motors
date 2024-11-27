import blog from '../../assets/images/blog.jpg'

const BlogCard = () => {
    return (
      <div className="blog-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box wow fadeInUp">
          <div className="image-box">
            <figure className="image">
              <a href="#">
                <img src={blog.src} alt="" />
              </a>
            </figure>
            <span className="date">news</span>
          </div>
          <div className="content-box">
            <ul className="post-info">
              <li>Ali Tufan</li>
              <li>April 20, 2023</li>
            </ul>
            <h6 className="title">
              <a href="blog-single.html" title="">
                This Long-Awaited Technology May Finally Change the World
              </a>
            </h6>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  