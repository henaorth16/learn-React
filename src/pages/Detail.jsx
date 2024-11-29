import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "../App";
import Title from "../components/Title";

export default function Detail() {
  const [user, setUser] = useState(null); // Initialize user state
  const [error, setError] = useState(null); // Initialize user state
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const { theme } = useContext(ThemeProvider);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show skeleton
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
        setIsLoading(false); // Hide skeleton
      } catch (error) {
        console.log(typeof error, "Error fetching user:", error);
        setError(error);
        setIsLoading(false); // Hide skeleton in case of an error
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className={`details ${theme}`}>
      <Title text="User Details" />
      {isLoading ? (
        <Skeleton theme={theme} />
      ) : user ? (
        <div>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={`https://${user.website}`}>{user.website}</a>
          </p>

          <h3>Address</h3>
          <p>
            <strong>Street:</strong> {user.address?.street}
          </p>
          <p>
            <strong>Suite:</strong> {user.address?.suite}
          </p>
          <p>
            <strong>City:</strong> {user.address?.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {user.address?.zipcode}
          </p>

          <h4>Geo Location</h4>
          <p>
            <strong>Lat:</strong> {user.address?.geo?.lat}
          </p>
          <p>
            <strong>Lng:</strong> {user.address?.geo?.lng}
          </p>

          <h3>Company</h3>
          <p>
            <strong>Name:</strong> {user.company?.name}
          </p>
          <p>
            <strong>CatchPhrase:</strong> {user.company?.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company?.bs}
          </p>
        </div>
      ) : (
        <div className={`error ${theme}`}>
          <p>
            {error.toString().includes("NetworkError")
              ? "Check your Internet Connection"
              : "Something is Wrong"}
          </p>
          <button onClick={()=> window.location.reload()}>Refresh</button>
        </div>
      )}
    </div>
  );
}

function Skeleton({ theme }) {
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#ddd",
        maxWidth: "800px",
        margin: "20px auto",
        padding: "div",
        height: "94vh",
        display: "flex",
        borderRadius: "10px",
        gap: "19px",
        flexDirection: "column",
      }}
      className="animated"
    >
      {Array.from({ length: 9 }).map((_, ix) => (
        <span
          key={ix}
          style={{
            width: ix % 4 === 0 ? "60%" : "100%",
            height: "35px",
            backgroundColor: theme === "light" ? "#aaa" : "#333",
            borderRadius: "10px",
          }}
        ></span>
      ))}
    </div>
  );
}
