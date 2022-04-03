const BlogList = ({blogs, title, handleDelete}) => {
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map( (blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by <strong>{blog.author}</strong></p>
          
          {/* <button onClick={()=> handleDelete(blog.id)}>delete blog</button>  */}{/* Anonymous funcの中にfuncを入れることで、制御：clickせずとも呼び出されてしまう */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;