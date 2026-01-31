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
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";



  const CORRECT_CODE = "101225"; // exemple : 13/06/20 = date de rencontre

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === CORRECT_CODE) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Mauvais code 😏");
    }
  };

  if (!unlocked) {
    return (
      <div style={{textAlign: "center", marginTop: "50px", fontFamily: "Arial"}}>
        <h2>You have to tape the password 💖</h2>
        <p>(Indice: Le jour où tout a commencé)</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="6 chiffres"
            maxLength={6}
            style={{padding: "10px", fontSize: "16px"}}
          />
          <br /><br />
          <button type="submit" style={{padding: "10px 20px", fontSize: "16px"}}>Entrer</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </div>
    );
  }

  // Si le code est correct → votre App Valentine originale
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
