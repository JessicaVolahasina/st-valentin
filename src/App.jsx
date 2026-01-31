import { useState } from "react";

const NO_PHRASES = [
  "Wrong answer 😌",
  "Are you sure about that?",
  "You know that’s not an option",
  "Be serious 😏",
  "We both know the answer",
  "Don’t play with me",
  "Okay now click yes",
];

export default function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      {!isValentine ? (
        <>
          <img src={firstImg} />
          <h1>So... Valentine's Day.You & Me? 💘</h1>
          <div>
            <button
              onClick={() => setIsValentine(true)}
              style={{
                fontSize: yesButtonSize,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              100% yes
            </button>
            <button
              onClick={() => setNoClicks(c => c + 1)}
              style={{
                fontSize: 16,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} />
          <h1 style={{ fontSize: 48, color: "pink" }}>Achievement unlocked: Us 💕</h1>
        </>
      )}
    </div>
  );
}
