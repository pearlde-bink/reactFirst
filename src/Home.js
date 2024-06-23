import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const [name, setName] = useState("mario");

  const handleClick = () => {
    setName("luigi");
  };

  const handleClickAgain = (name) => {
    console.log(`hello ${name}`);
  };

  //fetch data
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
      <br /> <br />
      <button onClick={() => handleClickAgain("Bink")}>Click me again</button>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blogs) => blogs.id === 2)}
          title="Mario blogs"
        />
      )}
    </div>
  );
};

export default Home;
