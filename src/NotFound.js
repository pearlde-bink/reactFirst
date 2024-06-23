import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>
        Go back to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
