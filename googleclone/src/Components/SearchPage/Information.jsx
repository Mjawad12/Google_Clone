import React from "react";

export default function Information({ information }) {
  return (
    <div className="information">
      <p>
        About {parseInt(information.totalResults).toLocaleString()} results (
        {information.searchTime.toFixed(2)} seconds)
      </p>
    </div>
  );
}
