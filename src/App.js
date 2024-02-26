import React, { useState } from "react";
import "./scss/style.scss";
import axios from "axios";

function App() {
  const baseUrl = "http://api.valantis.store:40000/";

  const [post, setPost] = useState(null);

  React.useEffect(() => {
    axios.get(baseUrl).then((r) => {
      console.log(r);
    });
  });

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
