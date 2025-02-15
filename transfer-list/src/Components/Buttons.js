const Buttons = ({onHandleRightClick, onHandleLeftClick}) => {
    return(
        <div className="buttons">
            <button className="left" onClick={onHandleLeftClick}>LEFT</button>
            <button className="right" onClick={onHandleRightClick}>RIGHT</button>
        </div>
    )
}

export default Buttons