import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/post/posts/");
        const data = await response.json();
        setMessage(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(message);

  return (
    <ul>
      {message.map((e) => {
        return (
          <li key={e.id}>
            <h1>{e.title}</h1>
            <p>{e.content}</p>
          </li>
          
        );
      })}
    </ul>
  );
};

export default App;
