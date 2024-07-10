import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  let [displayText , setDisplayText] = useState("");

  const handleButtonClick = (button)=>{
    if(button == 'C'){
      setDisplayText("");
    }else if(button == '='){
      let result = eval(displayText);
      setDisplayText(result)
    }else{
      const newText = displayText + button;
      setDisplayText(newText);
    }
  }

  return (
    <>
      <div className="container">
        <Display displayText={displayText}></Display>
        <Buttons handleButtonClick={handleButtonClick}></Buttons>
      </div>
    </>
  );
}

export default App;
