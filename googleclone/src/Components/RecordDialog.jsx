import React, { useEffect } from "react";

export default function RecordDialog({
  setrecordDialog,
  recordDialog,
  search,
}) {
  useEffect(() => {
    if (recordDialog) {
      const SpeechRecognition =
        window.speechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;
      recognition.addEventListener("result", async (e) => {
        const transScript = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        const ptag = document.querySelector(".values");
        if (ptag) {
          ptag.innerText = transScript;
        }
        if (e.results[0].isFinal) {
          setrecordDialog(false);
          document.body.classList.remove("no-scroll");
          search(transScript);
          document.querySelector(".text").value = transScript;
        }
      });
      recognition.start();
    }
    // eslint-disable-next-line
  }, []);
  const abortRec = () => {
    setrecordDialog(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <div className="rDWrapper">
      <svg
        onClick={abortRec}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 24"
        height={"40"}
        width={"40"}
        className="crossSVG"
        fill=" rgba(0, 0, 0, 0.65)"
      >
        <path d="M19,6.41L17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12,19,6.41Z" />
      </svg>
      <div className="rD">
        <p className="values">Speak Now</p>
        <div className="micr">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="96.000000pt"
            height="96.000000pt"
            viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet"
            fill="red"
            onClick={abortRec}
          >
            <g
              transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
              fill="red"
              stroke="none"
            >
              <path
                d="M413 830 c-57 -34 -65 -64 -61 -220 3 -138 3 -139 32 -169 36 -38 84
-53 129 -40 18 5 46 23 63 40 29 30 29 31 32 169 3 112 0 144 -13 170 -20 40
-70 70 -115 70 -19 0 -49 -9 -67 -20z"
              />
              <path
                d="M247 496 c-6 -16 5 -73 21 -102 21 -39 92 -94 137 -106 l45 -12 0
-48 0 -48 -49 0 c-62 0 -81 -7 -81 -30 0 -26 19 -30 160 -30 141 0 160 4 160
30 0 23 -19 30 -81 30 l-49 0 0 48 0 48 45 12 c45 12 116 67 137 106 16 29 27
86 21 102 -9 25 -42 16 -49 -13 -16 -74 -52 -121 -107 -142 -36 -14 -118 -14
-154 0 -55 21 -91 68 -107 142 -7 29 -40 38 -49 13z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
