import React, { useRef, useState } from "react";
import googleImg from "../Images/google.png";
import Search from "../Search";
import userImg from "../Images/user.png";
import { Link } from "react-router-dom";
import MoreFromGoogle from "../MoreFromGoogle";

export default function SearchNav({ searchIn, getResults }) {
  const [clicked, setclicked] = useState(null);
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
      {mO && <MoreFromGoogle top={"70px"} />}
      <div className="serNav">
        {window.innerWidth <= 640 ? (
          <div className="serLeft">
            <div className="sv">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={"25px"}
                height={"25px"}
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </div>
            <Link to={"/"}>
              <img width={90} height={30} src={googleImg} alt="google"></img>
            </Link>
            <button className="btn-2">Sign in</button>
          </div>
        ) : (
          <div className="serLeft">
            <Link to={"/"}>
              <img width={90} height={30} src={googleImg} alt="google"></img>
            </Link>
            {searchIn && (
              <Search
                valueOfinput={searchIn}
                clicked={clicked}
                setclicked={setclicked}
                getResults={getResults}
                res={true}
              />
            )}
          </div>
        )}
        {window.innerWidth >= 640 ? (
          <div className="serRight">
            <div className="svg">
              <svg
                fill=" rgba(0, 0, 0, 0.600)"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={"25px"}
                height={"25px"}
              >
                <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
                <circle cx="12" cy="12" r="3.5"></circle>
              </svg>
            </div>
            <div
              className="svg"
              ref={diaRef}
              onClick={() => {
                setmO(!mO);
                document.addEventListener("click", closeFunc);
              }}
            >
              <svg
                fill=" rgba(0, 0, 0, 0.600)"
                className="gb_i"
                height="27px"
                width="27px"
                focusable="false"
                viewBox="0 0 24 24"
                pointerEvents={"none"}
              >
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
              </svg>
            </div>
            <img height="27" width="27" src={userImg} alt="profileImg"></img>
          </div>
        ) : (
          searchIn && (
            <Search
              valueOfinput={searchIn}
              clicked={clicked}
              setclicked={setclicked}
              getResults={getResults}
              res={true}
            />
          )
        )}
      </div>
    </>
  );
}
