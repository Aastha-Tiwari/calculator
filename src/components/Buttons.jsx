function Buttons({ handleButtonClick }) {
  const buttons = ["C","1","2","3","+","4","5","6","-","7","8","9","*","/",".","0","="];

  return (
    <div className="buttons-container">
      {buttons.map((buttonText) => (
        <button
          key={buttonText}
          className={`button ${buttonText == "=" ? "equal" : null}`}
          onClick={() => handleButtonClick(buttonText)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
