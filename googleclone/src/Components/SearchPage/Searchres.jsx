import React, { useEffect, useRef } from "react";
import SearchresTop from "./SearchresTop";

export default function Searchres(props) {
  const serTitle = useRef("");
  const desc = useRef("");
  const { title, description, link, displaylink, pagemap } = props;
  useEffect(() => {
    serTitle.current.innerHTML =
      title.length > 50 ? title.slice(0, 47) + "..." : title;
    desc.current.innerHTML = description;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="searchRes">
      <div className="title_top">
        <SearchresTop displaylink={displaylink} pagemap={pagemap} />
        <a
          href={link}
          className="titleS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="title" ref={serTitle}>
             
          </h3>
        </a>
      </div>
      <div className="serRdesc">
        <p ref={desc}></p>
      </div>
    </div>
  );
}
