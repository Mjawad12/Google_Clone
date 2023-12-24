import React from "react";

export default function SearchresTop({ displaylink, pagemap }) {
  return (
    <div className="searchresTop">
      {pagemap && pagemap.cse_thumbnail && (
        <img
          src={pagemap.cse_thumbnail[0].src}
          width={"29px"}
          height={"29px"}
          alt="search result"
        ></img>
      )}
      <a
        href={`https://${displaylink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="linkS"
      >
        {displaylink}
        {`  `}
      </a>
    </div>
  );
}
