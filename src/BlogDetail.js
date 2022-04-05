import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const url = 'http://localhost:8000/blogs/' + id
  const { data:blog, isPending, error} = useFetch(url);  /* カスタムフック */
  
  return ( 
    <div className="blog-detail">
      { error && <div>{ error }</div> }
      { isPending && <div className="">Loading...</div> }      {/* when { here:Ture &&(then) here:is show  */}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetail;