import React from "react";
import Card from "./Components/Card/Card";
import "./App.css";
import logo from "./undraw_education.svg";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="main__div">
      <div className="first__half">
        <div className="firstHalf__word_div">
          <h1>
            Welcome To{" "}
            <span style={{ color: "#fc0254" }}>
              Vidyuth Portal
            </span>
          </h1>
          <h2>
            <span style={{color:"#383b70"}}>CloudEd Community Forum ,</span>
            <span style={{ color: "rgb(247, 241, 241,0.85)" }}>
              ISTE GECT
            </span>{" "}
            <span style={{color:"#383b70"}}>Student's Chapter</span>
          </h2>
          
        </div>
        <Button href="#second__half" className="button"variant="contained" >Notes</Button>
        <img src={logo} alt="image_lost" />
      </div>
      <div className="second__half" id="second__half">
        <a href="https://drive.google.com/drive/folders/1MizVKC5j0Pq6CabJ2ZuaUIjqk5il3eO6">
          <Card name="Architecture" />
        </a>

        <a href="https://drive.google.com/drive/folders/1v11tq9qjvnagzSdlxkJJCHXiIZWQsLh8">
          <Card name="Chemical Engineering" />
        </a>
        <a href="https://drive.google.com/drive/folders/19SCyrYbx5_ifLyVq0n_gHgAsYHe-D_7V">
          <Card name="Civil Engineering" />
        </a>
        <a href="https://drive.google.com/drive/folders/1o08tMHKMgxF8Z_Xj571CTnNlR9X-anbS">
          <Card name="Computer Science" />
        </a>
        <a href="https://drive.google.com/drive/folders/1jcd28aRUnTRR_FbW9xHZIR4PgZHSJgvc">
          <Card name="ECE" />
        </a>
        <a href="https://drive.google.com/drive/folders/1HKBR8mck4JCNG7g8mZuqyR5nlt-20Fd0">
          <Card name="EEE" />
        </a>
        <a href="https://drive.google.com/drive/folders/1kmi7dzJcApyDExV6HkCAwAQ8jCX1TSyK">
          <Card name="Mechanical Engineering" />
        </a>
        <a href="https://drive.google.com/drive/folders/1I5UkZdHydBvQQLhQWNTa73a2qOx_cld_">
          <Card name="Production Engineering" />
        </a>
      </div>
    </div>
  );
}

export default App;
