import React, { useState } from "react";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleHeartClick = () => {
    setLiked(!liked);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, age };
    console.log("Form submitted:", userData);

    // TODO: Send to Django API later
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="heart-section" onClick={handleHeartClick}>
          <span className={`heart ${liked ? "liked" : ""}`}>&#10084;</span>
          <p>{liked ? "You liked this!" : "Click the heart 💖"}</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
