import React from "react";

export default function Topics() {
  return (
    <div className="topicsDiv">
      <div className="topics">
        <h3 className="Selected color-blue">
          <svg
            fill={"#202124c4"}
            width={"17px"}
            height={"17px"}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              fill="#34a853"
              d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
            ></path>
            <path
              fill="#ea4335"
              d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
            ></path>
            <path
              fill="#fbbc04"
              d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
            ></path>
            <path
              fill="#4285f4"
              d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
            ></path>
          </svg>
          All
        </h3>
        <h3>
          <svg
            fill={"#202124c4"}
            width={"17px"}
            height={"17px"}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
          </svg>
          Images
        </h3>
        <h3>
          <svg
            fill={"#202124c4"}
            width={"17px"}
            height={"17px"}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
          </svg>
          Videos
        </h3>
        <h3>
          <svg
            fill={"#202124c4"}
            width={"17px"}
            height={"17px"}
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
          </svg>
          News
        </h3>
      </div>
    </div>
  );
}
