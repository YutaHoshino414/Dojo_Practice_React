import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = 'http://localhost:8000/blogs'
  const { data:blogs, isPending, error} = useFetch(url);  /* カスタムフック */

  return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div className="">Loading...</div> }      {/* when { here:Ture &&(then) here:is show  */}
      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;