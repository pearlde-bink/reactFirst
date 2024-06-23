import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = (e) => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    }).then(() => {
      console.log("deleted blog");
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body} </div>

          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
