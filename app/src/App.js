import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user = await fetch("http://127.0.0.1:3000/user/1").then((res) =>
      res.json()
    );
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      {user ? <div>{user.firstname} {user.lastname} </div> : <div>Loading...</div>}
    </div>
  );
}

export default App;
