import React, { useRef, useState } from "react";
import userImg from "./Images/user.png";
import MoreFromGoogle from "./MoreFromGoogle";
export default function Navbar() {
  const diaRef = useRef("");
  const [mO, setmO] = useState(false);

  const closeFunc = (e) => {
    if (
      e.target !== diaRef.current &&
      e.target !== document.querySelector(".svg") &&
      !e.target.classList.contains("in")
    ) {
      setmO(false);
      document.removeEventListener("click", closeFunc);
    }
  };

  return (
    <>
      {mO && <MoreFromGoogle />}
      <div className="navbar">
        <div className="navMain">
          <a
            href="https://mail.google.com/mail/u/1/?ogbl"
            target="_blank"
            className="aGM"
            rel="noreferrer"
          >
            Gmail
          </a>
          <a
            href="https://www.google.com/imghp?hl=en&ogbl"
            target="_blank"
            className="aGM"
            rel="noreferrer"
          >
            Images
          </a>
          <a
            href="https://labs.google.com/search/experiments?source=hp&authuser=1"
            target="_blank"
            rel="noreferrer"
            className="svg"
          >
            <svg
              className="gb_h"
              focusable="false"
              height="27px"
              viewBox="0 0 24 24"
              width="27px"
              fill=" rgba(0, 0, 0, 0.700)"
            >
              <path d="M22.29,18.37a2,2,0,0,0,0-.24,4.3,4.3,0,0,0-.09-.47c-.05-.15-.11-.31-.17-.46a3.88,3.88,0,0,0-.24-.45l-6.3-8.94V3.64h1.48a.92.92,0,0,0,0-1.84H7.36a.92.92,0,0,0,0,1.84H8.84V7.81L2.55,16.75a2.17,2.17,0,0,0-.24.45,2.85,2.85,0,0,0-.17.46A3.89,3.89,0,0,0,2,18.6c0,.08,0,.16,0,.23A3.8,3.8,0,0,0,2.26,20a3.6,3.6,0,0,0,.59,1,2.5,2.5,0,0,0,.32.33,2.54,2.54,0,0,0,.36.29,3.89,3.89,0,0,0,.4.25,4.28,4.28,0,0,0,.43.19,3.76,3.76,0,0,0,1.22.21H18.72A3.67,3.67,0,0,0,19.94,22l.44-.19a3.64,3.64,0,0,0,1.8-2.28,3.2,3.2,0,0,0,.11-.69,1.69,1.69,0,0,0,0-.23A1.77,1.77,0,0,0,22.29,18.37Zm-1.95.44a.78.78,0,0,1-.05.18l0,.08a.78.78,0,0,0-.05.14,2.09,2.09,0,0,1-.46.64l-.09.08a.88.88,0,0,1-.17.12l-.15.09-.11.06-.25.09a2.33,2.33,0,0,1-.53.07H5.85a1.27,1.27,0,0,1-.28,0,1.93,1.93,0,0,1-.73-.26A.91.91,0,0,1,4.68,20l-.23-.2h0a2.21,2.21,0,0,1-.3-.45l-.06-.12a1.77,1.77,0,0,1-.15-.65,1.88,1.88,0,0,1,.3-1.12l0-.05L10.67,8.5h0V3.64h2.95V8.49h0l6.44,8.92a2.38,2.38,0,0,1,.17.31,2.12,2.12,0,0,1,.14.68A2.58,2.58,0,0,1,20.34,18.81Z"></path>{" "}
              <path d="M5.66,17.74A.82.82,0,0,0,6.36,19H17.94a.82.82,0,0,0,.7-1.26l-4.1-5.55H9.76Z"></path>{" "}
            </svg>
          </a>
          <div
            className="svg"
            ref={diaRef}
            onClick={() => {
              setmO(!mO);
              document.addEventListener("click", closeFunc);
            }}
          >
            <svg
              className="gb_i"
              height="27px"
              width="27px"
              focusable="false"
              viewBox="0 0 24 24"
              fill=" rgba(0, 0, 0, 0.700)"
              pointerEvents="none"
            >
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </div>
          {localStorage.getItem("user") ? (
            <img height="27" width="27" src={userImg} alt="profileImg"></img>
          ) : (
            <button className="btn-2">Sign in</button>
          )}
        </div>
      </div>
    </>
  );
}
