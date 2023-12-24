import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(props) {
  const [searchHistory, setsearchHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  );
  const navigate = useNavigate();
  const { clicked, setclicked, valueOfinput, res, getResults } = props;
  const inputMainRef = useRef("");
  const inputRef = useRef("");
  const hist = useRef("");
  const [cross, setcross] = useState(false);
  const handleKey = (e) => {
    inputRef.current.value !== "" ? setcross(true) : setcross(false);
    if (e.key === "Enter") {
      search(e.target.value);
    }
  };
  const focusFunc = (e) => {
    if (!e.target.classList.contains("iner")) {
      setclicked(false);
      inputMainRef && inputMainRef?.current?.classList.remove("border-0");
      inputMainRef && inputMainRef?.current?.classList.remove("box-top-shadow");
      document.body.removeEventListener("click", focusFunc);
      return;
    }
  };
  useEffect(() => {
    if (clicked) {
      inputMainRef && inputMainRef.current.classList.add("border-0");
      inputMainRef && inputMainRef.current.classList.add("box-top-shadow");
      document.body.addEventListener("click", focusFunc);
    } else {
      inputMainRef && inputMainRef.current.classList.remove("border-0");
      inputMainRef && inputMainRef.current.classList.remove("box-top-shadow");
    }
    // eslint-disable-next-line
  }, [clicked]);
  useEffect(() => {
    inputRef.current.value = valueOfinput ? valueOfinput : "";
  }, [valueOfinput]);
  const search = (query) => {
    let hitory = JSON.parse(localStorage.getItem("history"));
    if (hitory) {
      if (!hitory.includes(query)) {
        if (hitory.length >= 8) {
          localStorage.setItem("history", JSON.stringify(hitory.slice(0, 7)));
        } else {
          localStorage.setItem("history", JSON.stringify([query, ...hitory]));
        }
      }
    } else {
      const hist = [query];
      localStorage.setItem("history", JSON.stringify(hist));
    }
    setclicked(false);
    if (window.location.pathname !== "/search/") {
      navigate(`/search/?&q=${query}`);
    } else {
      navigate(`/search/?&q=${query}`);
      getResults(query);
    }
  };
  const handlePreviousSerach = (e) => {
    const query = e.target.getAttribute("searchvalue");
    inputRef.current.value = query;
    search(query);
  };
  const removeHist = (e) => {
    let hist = JSON.parse(localStorage.getItem("history"));
    hist.splice(e.target.getAttribute("index"), 1);
    localStorage.setItem("history", JSON.stringify(hist));
    setsearchHistory(hist);
  };

  return (
    <div
      ref={inputMainRef}
      onClick={() => {
        inputRef.current.focus();
      }}
      onBlur={(e) => {
        setcross(e.target.value !== "");
      }}
      style={{ borderRadius: clicked && "23px" }}
      className="iner inputDiv"
    >
      <div className="iner inputPrimary">
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height={"21"}
          width={"21"}
          fill=" rgba(0, 0, 0, 0.35)"
          className=" iner sear"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          ref={inputRef}
          onFocus={(e) => {
            setclicked(true);
          }}
          onKeyDown={handleKey}
          className=" iner text"
        ></input>
        {cross && (
          <svg
            onClick={() => {
              inputRef.current.value = "";
              setcross(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 24"
            height={"24"}
            width={"24"}
            fill=" rgba(0, 0, 0, 0.65)"
          >
            <path d="M19,6.41L17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12,19,6.41Z" />
          </svg>
        )}
      </div>
      {clicked && (
        <>
          <div ref={hist} className=" iner histDiv">
            <hr />
            {searchHistory &&
              searchHistory.slice(0, 8).map((it, index) => {
                return (
                  <span key={index} className="iner his">
                    <div
                      className="sp"
                      searchvalue={it}
                      onClick={handlePreviousSerach}
                    >
                      <svg
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="iner"
                      >
                        <circle
                          cx="10"
                          cy="9"
                          r="8"
                          stroke="rgba(0, 0, 0, 0.300)"
                          strokeWidth="1.7"
                          fill="white"
                          pointerEvents={"none"}
                        />
                        <line
                          x1="10"
                          y1="10"
                          x2="10"
                          y2="5"
                          stroke="rgba(0, 0, 0, 0.368)"
                          strokeWidth="1"
                          transform="rotate(120 10 10)"
                          pointerEvents={"none"}
                        />
                        <line
                          x1="10"
                          y1="10.1"
                          x2="10"
                          y2="3"
                          stroke="rgba(0, 0, 0, 0.368)"
                          strokeWidth="1"
                          transform="rotate(0 10 10)"
                          pointerEvents={"none"}
                        />
                      </svg>
                      {it}
                    </div>
                    <svg
                      onClick={removeHist}
                      index={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 24"
                      height={"24"}
                      width={"24"}
                      className="cross_ser"
                      fill="rgba(0, 0, 0, 0.300)"
                    >
                      <path
                        style={{ pointerEvents: "none" }}
                        d="M19,6.41L17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12,19,6.41Z"
                      />
                    </svg>
                  </span>
                );
              })}
            {clicked && !res && (
              <div style={{ marginTop: "1.5rem" }} className="btn-div">
                <button
                  onClick={() => {
                    search(inputRef.current.value);
                  }}
                  className=" btn-p"
                >
                  Google Search
                </button>
                <a
                  href="https://doodles.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="iner btn-p"
                >
                  I'm Feeling Lucky
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
