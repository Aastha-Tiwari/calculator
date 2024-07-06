function Buttons(){
    const buttons = ['C','1','2','3','+','4','5','6','-','7','8','9','*','/','.','0','='];

    return (
        <div className="buttons-container">
          {buttons.map(button=><button className="button">{button}</button>)}
        </div>
    )
}

export default Buttons;