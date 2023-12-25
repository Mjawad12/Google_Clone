import React, { useState } from "react";
import googleImg from "./Images/google.png";
import Search from "./Search.jsx";
export default function Hero() {
  const [clicked, setclicked] = useState(null);

  return (
    <section className="hero">
      <div className="imgDiv">
        <img height={"90"} width={"270"} src={googleImg} alt="google"></img>
      </div>
      <Search clicked={clicked} setclicked={setclicked} />

      <div className="btn-div">
        <button className="btn-p">Google Search</button>
        <a
          href="https://doodles.google/"
          target="_blank"
          rel="noopener noreferrer"
          className="iner btn-p"
        >
          I'm Feeling Lucky
        </a>
      </div>
    </section>
  );
}
