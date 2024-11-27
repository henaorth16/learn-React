import { useEffect, useState } from "react";
import Child from "./child";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return <>
    {
      data.length === 0 ? 
      <p>Loading...</p> : 
      <Child 
        people={data}
      />
    }
  </>;
}
