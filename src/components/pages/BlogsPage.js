import BlogsSection from "../common/BlogsSection";
import Breadcrumb from "../common/Breadcrumb";

const BlogsPage = () => {
  return (
    <>
       <section className="blog-section v1 layout-radius">
       <div className="boxcar-container">
        <Breadcrumb page={'Blogs'}/>
        <BlogsSection blogsPage={true}/>
      </div>
      </section>
    </>
  );
};

export default BlogsPage;
