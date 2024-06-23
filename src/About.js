import { useState } from "react";
// import useFetch from "./useFetch";

const About = () => {
  //   const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  const [about, setAbout] = useState(
    "Why did we return a function from our effect? This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!"
  );

  const handleSeeMore = (about) => {
    setAbout(
      "Why did we return a function from our effect? This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect! When exactly does React clean up an effect? React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. We’ll discuss why this helps avoid bugs and how to opt out of this behavior in case it creates performance issues later below."
    );
  };

  return (
    <div className="about">
      <h3>About</h3>
      <p>{about}</p>
      <button onClick={() => handleSeeMore(about)}>See More</button>
      <img
        src="https://cdn.britannica.com/06/180006-138-F7CE1D29/Charles-Darwin-Overview-life-focus-evolution-work.jpg?w=800&h=450&c=crop"
        alt="darwin"
      />
    </div>
  );
};

export default About;
